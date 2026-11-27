import { SECRETS } from './worldData.js';

const BONUS_KEY_PREFIX = 'secret-region-reward:';

/**
 * Grants a one-time completion bonus when every secret in a region is found.
 * The reward flag is stored in the regular game state and therefore saved.
 */
export function claimSecretRegionReward(state, secretId, secretList = SECRETS) {
  if (!state || typeof state !== 'object') return null;
  const target = secretList.find(secret => secret.id === secretId);
  if (!target || typeof target.region !== 'string') return null;

  if (!Array.isArray(state.discoveredSecrets)) state.discoveredSecrets = [];
  if (!state.flags || typeof state.flags !== 'object' || Array.isArray(state.flags)) {
    state.flags = {};
  }

  const regionSecrets = secretList.filter(secret => secret.region === target.region);
  if (!regionSecrets.length ||
      !regionSecrets.every(secret => state.discoveredSecrets.includes(secret.id))) {
    return null;
  }

  const flag = `${BONUS_KEY_PREFIX}${target.region}`;
  if (state.flags[flag]) return null;

  state.flags[flag] = true;
  const count = regionSecrets.length;
  return {
    region: target.region,
    count,
    gold: 75 + count * 15,
    crystals: 2,
    xp: 100 + count * 25
  };
}
