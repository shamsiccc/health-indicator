import { getHealthStatus } from '../health.js';

describe('getHealthStatus', () => {
  test('should return "healthy" when health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "healthy" when health = 51', () => {
    const character = { name: 'Маг', health: 51 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health = 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health = 15', () => {
    const character = { name: 'Маг', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "wounded" when health between 15 and 50', () => {
    const character = { name: 'Маг', health: 30 };
    expect(getHealthStatus(character)).toBe('wounded');
  });

  test('should return "critical" when health < 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should return "critical" when health = 0', () => {
    const character = { name: 'Маг', health: 0 };
    expect(getHealthStatus(character)).toBe('critical');
  });

  test('should throw error for invalid character object', () => {
    expect(() => getHealthStatus(null)).toThrow('Invalid character object');
    expect(() => getHealthStatus(undefined)).toThrow('Invalid character object');
    expect(() => getHealthStatus({})).toThrow('Invalid character object');
    expect(() => getHealthStatus({ name: 'Маг' })).toThrow('Invalid character object');
  });

  test('should throw error for non-number health', () => {
    expect(() => getHealthStatus({ health: '90' })).toThrow('Invalid character object');
    expect(() => getHealthStatus({ health: null })).toThrow('Invalid character object');
  });
});