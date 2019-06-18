export const formatUrl = url => url.replace(/(^\w+:|^)\/\//, '')

export const chunk = (arr, n) =>
  arr
    .slice(0, ((arr.length + n - 1) / n) | 0)
    .map((c, i) => arr.slice(n * i, n * i + n))
