import React from 'react';
import { Link } from "react-router-dom";

const Write = () => {
    return (
        <main className="lko-main">
            <div className="lko-writer-container">
                <section className="lko-writer-container-1">
                    <span>Write story, poem, series or a novel or just your own diary</span>
                    <Link to="/write-story">Write a Story</Link>
                </section>
                <section className="lko-writer-container-1">
                    <span>Write story, poem, series or a novel or just your own diary</span>
                    <Link to="/write-story">Create a Series</Link>
                </section>
                <section className="lko-writer-container-1">
                    <span>Write story, poem, series or a novel or just your own diary</span>
                    <Link to="/write-story">Create a Audio</Link>
                </section>
                <section className="lko-writer-container-1">
                    <span>Write story, poem, series or a novel or just your own diary</span>
                    <Link to="/write-story">Learn to create</Link>
                </section>
            </div>

        </main>
    )
}


export default Write;