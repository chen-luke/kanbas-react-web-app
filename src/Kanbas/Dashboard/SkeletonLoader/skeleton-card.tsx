import './skeleton-card.css';   // ← CSS for the shimmer

export default function SkeletonCard() {
    return (
        <div className="card">
            {/* Image placeholder */}
            <div className="card-img-top placeholder-glow">
                <div className="placeholder col-12" style={{ height: '150px' }}></div>
            </div>

            {/* Body placeholders */}
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-8"></span>
                </p>
            </div>
        </div>
    );
}