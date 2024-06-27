'use client'

export default function SignOut() {
  return (
    <button
      onClick={() => {
        fetch('/api/auth/signout', {
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        })
          .then(res => {
            if (res.ok) {
              window.location.href = '/'
            }
          })
          .catch(error => {
            console.error('Sign out error:', error)
          })
      }}
    >
      Sign out
    </button>
  )
}
