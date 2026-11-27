import { SECRETS, REGIONS } from './worldData.js';

export function getExplorationJournal(state, regions = REGIONS, secrets = SECRETS) {
  const found = new Set(Array.isArray(state?.discoveredSecrets) ? state.discoveredSecrets : []);
  const flags = state?.flags && typeof state.flags === 'object' ? state.flags : {};

  return regions.map(region => {
    const regionSecrets = secrets.filter(secret => secret.region === region.id);
    const discovered = regionSecrets.filter(secret => found.has(secret.id));
    const complete = regionSecrets.length > 0 && discovered.length === regionSecrets.length;
    return {
      id: region.id,
      name: region.name,
      discovered: discovered.length,
      total: regionSecrets.length,
      complete,
      rewardClaimed: Boolean(flags[`secret-region-reward:${region.id}`]),
      secrets: regionSecrets.map(secret => ({
        id: secret.id,
        name: found.has(secret.id) ? secret.name : 'ความลับที่ยังไม่ค้นพบ',
        discovered: found.has(secret.id)
      }))
    };
  });
}

export function explorationTotals(journal) {
  return journal.reduce((total, region) => ({
    found: total.found + region.discovered,
    total: total.total + region.total,
    completedRegions: total.completedRegions + (region.complete ? 1 : 0)
  }), { found: 0, total: 0, completedRegions: 0 });
}
