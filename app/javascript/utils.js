import useToast from './hooks/useToast'

export async function request(url, method = 'GET', options = {}, successCb = function () {}, errorCb = function () {}) {
  const response = await fetch(url, { method: method, ...options })

  if (response.ok) {
    let data = null

    try {
      data = await response.json()
    } catch {
    } finally {
      successCb(data)
    }
  } else {
    try {
      // json of the response is available
      const err = await response.json()
      useToast(err.message, 'error')
      errorCb(err)
    } catch {
      // json of the response isn't available
      if (response.status >= 500 && response.status <= 599) {
        useToast("There's something wrong on our side. Please try again later.", 'error')
      } else {
        // 400 - 499 errors
        useToast('There was an error.', 'error')
      }
    }
  }
}

export function timeElapsedSince(date) {
  const now = new Date()
  const elapsed = now - date
  const seconds = Math.floor(elapsed / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`
  }
}
