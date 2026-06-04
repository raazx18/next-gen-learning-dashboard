"use client";
import { Course } from "@/types/course";
import {
  MotionDiv,
  container,
} from "./DashboardAnimations";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

export default function BentoGrid({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <MotionDiv
  variants={container}
  initial="hidden"
  animate="show"
    >
      <HeroTile />

      <ActivityTile />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
      </MotionDiv>
  );
}