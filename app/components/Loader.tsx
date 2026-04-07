import { RefObject } from "react";

interface LoaderProps {
    percent: number;
    isLoading: boolean;
    loaderRef: RefObject<HTMLDivElement | null>;
}

export default function Loader({ percent, isLoading, loaderRef }: LoaderProps) {
    return (
        <div id="loader" ref={loaderRef} style={{ display: isLoading ? "flex" : "none" }}>
            <div className="loader-content">
                <span id="percent">{percent < 10 ? `0${percent}` : percent}</span>
                <span className="symbol">%</span>
            </div>
        </div>
    );
}
