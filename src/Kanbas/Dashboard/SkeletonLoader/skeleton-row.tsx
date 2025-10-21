import SkeletonCard from "./skeleton-card";

function SkeletonRow({ count = 5 }) {
    const skeletonItems = Array.from({ length: count }, (_, i) => i);
    console.log()
    return (
        <ul className="row row-cols-1 row-cols-md-5 g-4 mt-0 list-unstyled">
            {skeletonItems.map(i => (
                <li key={i} className="col" style={{ width: '300px' }}>
                    <SkeletonCard />
                </li>
            ))}
        </ul>
    );
}

export default SkeletonRow;