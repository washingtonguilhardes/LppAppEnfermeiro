export function setInjuryPlace(injuryPlace: any) {
  return {
    type: 'FILTER_ADD_INJURY_PLACE',
    payload: { injuryPlace },
  };
}
