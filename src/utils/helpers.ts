export const getSelectBoxOptions = payload => payload.map(value => ({
  ...value,
  key: value.id || value.value || value.title || value,
  value: value.id || value.value || value.title || value,
  text: value.text || value.name || value.label || value.description
    || (value.firstName && `${value.firstName} ${value.lastName}`) || value.title || value,
}));
