function CourseImage({ courseId }: { courseId: string }) {

    const style = {
        height: '150px',
        background: 'black',
        color: 'rebeccapurple'
    }
    return (
        <div style={style}>
            {courseId}
        </div>
    )
}

export default CourseImage

