'use client'

export default function SignOut() {
  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all"
      onClick={() => {
        fetch('/api/auth/signout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin'
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
      Goddammit, sign me out!
    </button>
  )
}
