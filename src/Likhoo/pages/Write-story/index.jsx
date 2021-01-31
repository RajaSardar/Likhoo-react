import React from 'react';

const WriteStory = () => {
    const initialState = {
        title: "",
        story: "",
        draft: false,
    };
    const [app, setApp] = React.useState(initialState);
    const handleTextInput = (e) => {
        setApp({ ...app, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("it's the submit button");
        console.log(app);
    }
    const handleDraft = (e) => {
        e.preventDefault();
        console.log("it's the Draft button");
        console.log(app);
    }
    return (
        <main className="lko-main">
            <div className="lko-wrt-stry-nav">

            </div>
            <div className="lko-wrt-stry">
                {/* <!-- <form action="/publish" method="get"> --> */}
                <form action="publish.html" method="get">
                    <input type="text" id="title" name="title" placeholder="Enter the title" onChange={handleTextInput} />
                    <textarea name="story" id="story" cols="30" rows="10" placeholder="Write here..." onChange={handleTextInput} />
                    <div className="lko-wrt-stry-btn">
                        <input type="submit" value="Post" onClick={handleSubmit} />
                        <input type="button" value="Draft" onClick={handleDraft} />
                    </div>
                </form>
            </div>
        </main>
    )
}


export default WriteStory;