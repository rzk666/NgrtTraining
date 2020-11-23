import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Razi',
    text: 'Razi',
    value: 'Razi',
  },
  {
    key: 'Yotam',
    text: 'Yotam',
    value: 'Yotam',
  },
  {
    key: 'Aharon',
    text: 'Aharon',
    value: 'Aharon',
  },
  {
    key: 'Kahana',
    text: 'Kahana',
    value: 'Kahana',
  },
  {
    key: 'Lilo',
    text: 'Lilo',
    value: 'Lilo',
  },
]

const DropdownShred = () => (
  <Dropdown
    placeholder='Select member'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownShred;