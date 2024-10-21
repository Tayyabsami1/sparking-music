'use client'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import couseData from "@/data/music_courses.json"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
const page = () => {

  return (
    <div className="min-h-screen bg-black py-12 pt-36 ">
        <h1 className="uppercase text-center text-lg md:text-5xl font-semibold mb-8 text-white">All Courses ({couseData.courses.length})</h1>

        <div className="flex flex-wrap justify-center">
            {
                couseData.courses.map((course:Course)=>(

                        <div key={course.id} className=" p-2  m-2 my-4 cursor-pointer">
                            <CardContainer>
                                <CardItem>
                                    <CardBody>
                                        <h2 className="text-xl font-bold mb-4">{course.title}</h2>
                                        <p className="text-sm mb-4">{course.description}</p>
                                        <p className="text-sm text-gray-400">Instructor: {course.instructor}</p>
                                        <p className="text-sm text-gray-400">Price: ${course.price}</p>
                                    </CardBody>
                                </CardItem>
                            </CardContainer>
                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default page