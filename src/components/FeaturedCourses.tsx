'use client'
import coursesData from '@/data/music_courses.json'
import Link from 'next/link'
import { Button } from "@/components/ui/moving-border";
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {
    const FeaturedCourses = coursesData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>
            <div className='mt-10 '>
                <div className=' mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {
                        FeaturedCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:py-6 flex flex-col items-center text-center flex-grow'>
                                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                        <p className='text-sm text-neutral-600 flex-grow dark:text-neutral-400'>{course.description}</p>
                                        <Link href={` /courses/${course.slug}`}>Learn More</Link>

                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mt-20 text-center'>
                <Link className='px-4 py-2 border-none text-neutral-700  ' href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className='bg-gray-800'
                    >
                        View All Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses