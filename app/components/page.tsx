import AuthSidePanel from "@/components/AuthSidePanel"
import ConnectionCard from "@/components/ConnectionCard"
import DashboardCard from "@/components/DashboardCard"
import DateTime from "@/components/DateTime"
import InformationCard from "@/components/InformationCard"
import Navbar from "@/components/Navbar"
import TemplateCard from "@/components/TemplateCard"
import Footer from "@/components/Footer"
import Templates from "@/components/Templates"
import TimeZone from "@/components/TimeZone"
import SearchBar from "@/components/SearchBar"
import Sort from "@/components/Sort"
import OptionsCard from "@/components/OptionsCard"
import OnboardingSidePanel from "@/components/OnboardingSidePanel"
import LinkedinConnect from "@/components/LinkedinConnect"

// const now = new Date()
// const start = new Date()
// start.setHours(20, 30, 0, 0)
// const scheduled = new Date(start.getTime() +  60 * 60 * 1000)

const page = () => {
	return (
		<main className="p-8 h-screen w-screen fonbt-mada bg-bluewash">

			{/* <Navbar/> */}

			{/*
				<AuthSidePanel/>
			*/}

			{/*
				<ConnectionCard
					name="Vishnu Shon"
					country="India"
					company="The Lifetime Value Co"
					bio="Computer Engineering Student | Software Developer | Project Manager"
					profile="https://www.linkedin.com/in/visshon/"
					picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
				/>
			*/}

			{
				/* <DashboardCard
					name="Vishnu Shon"
					template={`( ${"Job Opportunity Outreach"} )`}
					message="👉 If you want custom icons instead of dots, you can pair list-none with flex items-center and then insert an icon (e.g. from Lucide or Heroicons)."
					profile="https://www.linkedin.com/in/visshon/"
					picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
					
					scheduleTime={scheduled}
					startTime={start}
				/> 
			*/}

			{/* <DateTime/> */}

			{/* <Templates
				value="Outreach Template"
			/> */}

			 {/* <TemplateCard
			 	name="Conference / Event Connection"
			 /> */}

			{/* <Footer/> */}

			{/* <Sort
				options={[
					"Recently Added",
					"A → Z",
					"Z → A"
				]}
			/> */}
{/* 
			<OptionsCard
					name="Vishnu Shon"
					template={`( ${"Job Opportunity Outreach"} )`}
					message="👉 If you want custom icons instead of dots, you can pair list-none with flex items-center and then insert an icon (e.g. from Lucide or Heroicons)."
					profile="https://www.linkedin.com/in/visshon/"
					picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
					country="India"
					company="The Lifetime Value Co"
			/> */}

			{/* <OnboardingSidePanel/> */}

			{/* <LinkedinConnect/> */}
		</main>
	)
}

export default page
