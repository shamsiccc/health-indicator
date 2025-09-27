export function getHealthStatus(character) {
  if (!character || typeof character.health !== 'number') {
    throw new Error('Invalid character object');
  }

  const { health } = character;

  if (health > 50) {
    return 'healthy';
  } else if (health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}