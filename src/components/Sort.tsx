import type { ChangeEvent } from "react";

type SortProps = {
  value: string
  onChange: (sort: string) => void
}

const Sort = ({value, onChange}:SortProps)=>{

  const handleChange = (event: ChangeEvent<HTMLSelectElement>)=>{
    onChange(event.target.value)
  }

  return(
    <select value={value} onChange={handleChange}>
      <option value="">Best match</option>
      <option value="followers">Most followers</option>
      <option value="repositories">Most repositories</option>
      <option value="joined">Newest</option>
    </select>
  )
}

export default Sort
