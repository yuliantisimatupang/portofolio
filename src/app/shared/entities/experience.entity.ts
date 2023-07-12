interface DetailJobs {
  title: string
}

export interface Experience {
  duration: string
  position: string
  shortdescription? :string
  description?: DetailJobs[]
}
