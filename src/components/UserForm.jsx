import { useState } from 'react'

const emptyForm = {
  name: '',
  email: '',
  company: '',
  role: '',
}

function UserForm({ onSubmit, setErrorMessage }) {
  const [form, setForm] = useState(emptyForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentState) => ({
      ...currentState,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      role: form.role.trim(),
    }

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.company || !trimmedForm.role) {
      setErrorMessage('Please fill out every field before adding a user.')
      return
    }

    const newUser = {
      id: Date.now(),
      ...trimmedForm,
    }

    onSubmit(newUser)
    setForm(emptyForm)
    setErrorMessage('')
  }

  return (
    <aside className="user-form-panel">
      <h2>Add a New User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@email.com"
          />
        </label>

        <label>
          Company
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
          />
        </label>

        <label>
          Role
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Job role"
          />
        </label>

        <button type="submit" className="primary-button">
          Add User
        </button>
      </form>
    </aside>
  )
}

export default UserForm
