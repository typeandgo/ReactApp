export function toTitleCase(str=''){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
}

export function sortIncrease(data) {
  return data.sort(function(a,b) {
    return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
  });
}

export function sortDecrease(data) {
  return data.sort(function(a,b) {
    return (b.rating > a.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
  });
}

export function sortAtoZ(data) {
  return data.sort(function(a,b) {
    return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
  });
}
