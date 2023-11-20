export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? false : true;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return archerIsAwake || prisonerIsAwake || knightIsAwake ? true : false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake ? true : false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (!archerIsAwake && !knightIsAwake && prisonerIsAwake && !petDogIsPresent) ||
    (petDogIsPresent && !archerIsAwake)
  );
}
