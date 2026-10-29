// Утилиты

function isString(value) {
  return typeof value === 'string'
}

const normalise = (v) => {
  return isString(v) ? v.trim().toLowerCase() : null
}

const dataFilter = (dataElem, dataFilters) => {
  /*
    dataElem:  объект  {k1: v1, k2: v2, ..., kn: vn}
    dataFilters: объект {k1: [1v1,  2v1, ...], k2: [1v2, 2v2, ...], ..., kn: [mvn, ...]}

    Проверяет, что по ключу k1, k2, ..., kn значение из dataElem ecть в списке dataFilters.
    Если по каждому ключу есть совпадение в списке значений фильтра.
    Как только находится несовпадение,  немедленно вовзвращает false.

    Пустой список  kn: [] по умолчанию true.
    Ограничение: ключи data и фильтра должны совпадать.
  */
  const prps = Object.keys(dataElem);
  for (let p of prps) {
    // если нет фильтра, или список пуст - false -> функция вернет true -> выход
    // если фильтр содержит значение из датасета - false  -> функция вернет true -> выход 
    if (dataFilters?.[p]?.length && !dataFilters[p].includes(normalise(dataElem[p]))) {
      return false;
    }
  }
  return true;
}

const appendUnique = (o, k, v) => {
  /*
    Принимает:
      o: объект типа {"": []}
      k: ключ
      v: значение, которое необходимо добавить в список по ключу k
    Возвращает:
      объект  o: {k: [...,  v]}
    
    Безопасно получает массив по ключу k объекта o и добавляет в список значение v.
    Если v уже есть в списке, возращает исходный объект без изменений.
  */
  v = normalise(v)
  const arr = o?.[k] ?? [];
  if (arr.includes(v)) return o;
  return { ...o, [k]: [...arr, v] };
}

const removeItem = (o, k, v) => {
  /*
    o: объект типа {"": []}
    k: ключ
    v: значение, которое необходимо удалить из списка по ключу k
    
    Если нет объекта/ключа, ИЛИ в массиве нет такого значения -> возвращаем как есть
    Иначе удаляет  v  из списка.
  */
  v = normalise(v)
  if (!o?.[k]?.includes(v)) return o;
  return {
    ...o,
    [k]: o[k].filter(item => item !== v)
  };
}

const facetExtraction = (o, k) => {
  let facet = {}
  for (let d of o) {
    let v = d[k]
    facet = appendUnique(facet, k, v)
  }
  return facet
}


export { dataFilter, appendUnique, removeItem, facetExtraction }