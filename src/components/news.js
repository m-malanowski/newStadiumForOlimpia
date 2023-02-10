import * as React from "react";
import Card from "./card";
const News = () => {
    return (
        <div className="section">
            <div className="grid gap-lg">
                <h2 className="uppercase">Aktualności</h2>
                <div className="news">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default News
