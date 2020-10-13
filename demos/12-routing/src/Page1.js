import React from 'react'
import { Link } from '@reach/router'
const Page1 = () => (
  <div>
    <h1> Ceci est ma page 1</h1>
    <p>
      Le contenu de ma page 1 <br />
      <a href="/about">Go to page about HREF</a>
      <br />
      <Link to="/about">Go to page about LINK</Link>
    </p>
  </div>
)

export default Page1
