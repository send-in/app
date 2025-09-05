"use client"

import { DashboardCard, LinkedinConnect, SearchBar } from '@/components'
import { useState } from 'react'

const ComponentsShowcase = () => {

  return (
    <div className="min-h-screen bg-gray-50 p-8">
		<DashboardCard
			key={0}
			name="Vishnu Shon"
			picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
			template="( Job Opportunity )"
			profile=""
			scheduleTime={new Date()}
			startTime={new Date()}
		/>
    </div>
  )
}

export default ComponentsShowcase
