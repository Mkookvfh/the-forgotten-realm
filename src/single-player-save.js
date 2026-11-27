export const CURRENT_SAVE_VERSION = 12;

export function validateSaveData(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Save data must be an object');
  }

  if (Number.isFinite(Number(data.version))) {
    const version = Number(data.version);
    if (version < 1 || version > CURRENT_SAVE_VERSION) {
      throw new Error('Unsupported save version');
    }
  }

  if (
    !Array.isArray(data.player) ||
    data.player.length !== 3 ||
    !data.player.every(Number.isFinite) ||
    !data.state ||
    typeof data.state !== 'object' ||
    Array.isArray(data.state)
  ) {
    throw new Error('Invalid save structure');
  }

  if (data.enemies !== undefined && !Array.isArray(data.enemies)) {
    throw new Error('Invalid enemy save data');
  }
  if (data.collectibles !== undefined && !Array.isArray(data.collectibles)) {
    throw new Error('Invalid collectible save data');
  }

  return data;
}

function parseCandidate(raw, label) {
  if (!raw) return null;
  const parsed = JSON.parse(raw);
  return { data: validateSaveData(parsed), source: label };
}

/**
 * Reads the primary save first, then the recovery copy if the primary is
 * unreadable or structurally invalid. Supports legacy saves without version.
 */
export function parseSaveWithBackup(primaryRaw, backupRaw) {
  let primaryError;

  try {
    const primary = parseCandidate(primaryRaw, 'primary');
    if (primary) return { ...primary, recovered: false };
  } catch (error) {
    primaryError = error;
  }

  try {
    const backup = parseCandidate(backupRaw, 'backup');
    if (backup) return { ...backup, recovered: true };
  } catch (backupError) {
    if (!primaryError) primaryError = backupError;
  }

  throw primaryError || new Error('No save data found');
}

/** Returns true only when a raw save can be parsed and passes structural validation. */
export function isValidSaveRaw(raw) {
  if (typeof raw !== 'string' || !raw) return false;
  try {
    parseSaveWithBackup(raw, null);
    return true;
  } catch {
    return false;
  }
}
