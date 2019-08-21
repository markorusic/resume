import { useEffect, useState } from 'react'

const Fetch = ({ url, children }) => {
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(value => setValue(value))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
    return () => {}
  }, [url])

  return children({
    value,
    loading,
    error
  })
}

export default Fetch
