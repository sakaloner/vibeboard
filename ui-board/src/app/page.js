'use client'
import Introduction from "@/components/Introduction" 
import SearchBar from "@/components/SearchBar"
import ProjectListing from "@/components/ProjectListing"
import FilterPanel from "@/components/FilterPanel"
import '@/app/globals.css'

let descrip = `The premise at the heart of "Operation Solstice - Ignite The Sun" is a riveting exploration into the realm of science fiction, challenging our current understanding of cosmic phenomena. Our narrative centres around an advanced civilization seeking to control their solar system's star - the Sun. They aim to initiate a controlled burn of the Sun, unleashing unparalleled energy amounts to solve their rapidly escalating power crisis.

This civilization, often referred to as 'Children of the Sun', have harnessed technology far superior to anything we can currently fathom. With it, they plan to tweak the Sun's core reactions in a last-ditch attempt to sustain their existence. Harnessing solar flares and managing star-quakes form some exhilarating plot-lines, drawing audiences deep into this high-stakes strategy.

Our narrative also tackles complex themes of ethics and responsibility. The Children of the Sun grapple with the potential consequences of their actions. Will they inadvertently cause a supernova, obliterating themselves and other nearby life-bearing planets? Or could this experiment usher in a new era where stars' energy can be modulated to suit civilizations' needs?

The "Operation Solstice - Ignite The Sun" project will take viewers on an awe-inspiring journey through space, time, and the intricacies of advanced tech. It skilfully marries elements of suspense, hard science fiction, ethical dilemmas and fundamentally, the primal human instinct for survival.

In conclusion, this project promises to deliver a captivating tale of stellar proportions. As we delve into the struggle of a civilization against their dying star, we engage audiences with thought-provoking narratives about power, duty, and the lengths a society would go to preserve its existence.`

let test_projects = [
  {title: 'Operation Solstice - Ignite the sun', description: descrip},
  {title: 'We will code a lil cute thing', description: descrip},
  {title: 'We will code a big scary machine', description: descrip},
  {title: 'We will code make AGI love rice', description: descrip},
]

export default function Home() {
  return (
    <div className="flex-col justify-center items-center h-screen m-5 ">
      <Introduction  />
      <SearchBar />
      <div className="flex align-center w-full justify-center">
        <div className="w-1/4">
            <FilterPanel />
        </div>
        <div className="w-3/4">
            <ProjectListing projects={test_projects} />
        </div>
      </div>
    </div>
  );
}

