import React from "react";

interface CourseImageProps {
    courseName: string;
    courseId: string;
}

const courseArcoynom = (courseName: string) => {
    const words = courseName.split(' ')
    const firstChars = words.filter(word => word.length > 0).map(word => word[0].toUpperCase());
    return firstChars.join('')
}

const CourseImage: React.FC<CourseImageProps> = ({ courseId, courseName }) => {
    const style: React.CSSProperties = {
        height: "150px",
        background: "#E6D7AE",
        color: "#ffffffff",
        fontSize: "1.2rem",
        fontWeight: "800",
        fontFamily: "arial",
        display: "flex",
        alignItems: "center",    // vertical centering
        justifyContent: "center",// horizontal centering
        borderRadius: "8px",     // optional: rounded corners
        userSelect: "none",      // optional: prevent text selection
        textShadow: "1px 1px 2px rgba(0,0,0,0.3)", // slight drop shadow for text
    };

    return (
        <div style={style}>
            <span>{courseArcoynom(courseName)} {courseId}</span>
        </div>
    );
};

export default CourseImage;

