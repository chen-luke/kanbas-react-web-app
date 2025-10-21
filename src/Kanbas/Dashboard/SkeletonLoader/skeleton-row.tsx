import SkeletonCard from "./skeleton-card";

function SkeletonRow({ count = 7 }) {
    const skeletonItems = Array.from({ length: count }, (_, i) => i);

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
            {skeletonItems.map(i => (
                <div key={i} className="col" style={{ width: '300px' }}>
                    <SkeletonCard />
                </div>
            ))}
        </div>
    );
}


export default SkeletonRow;