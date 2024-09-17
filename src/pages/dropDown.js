import { useState } from "react";
const Rangs = ["white", "blue", "red", "green", "yellow", "skyblue", "orange"];
export const DropDown = () => {
    const [backgroundC, setBackground] = useState("red");
    const handleSelector = (e) => {
        setBackground(e.target.value);

    }
    return (

        <div style={{
            backgroundColor: backgroundC,
        }}>
            <h1>DropDown Chooser</h1>
            <select value={backgroundC} onChange={handleSelector}
                style={{
                    width: 200
                }}>
                {
                    Rangs.map((rang) => {
                        return (
                            <option value={rang}>{rang}</option>
                        )
                    })}


            </select>
            <div class="radiobutton" style={{ display: "flex", flexDirection: "column" }}>
                {
                    Rangs.map((rang) => {
                        return (
                            <label>

                                <input
                                    value={rang}
                                    type="radio"

                                    checked={backgroundC === rang}
                                    onChange={handleSelector}
                                />
                                {rang}
                            </label>
                        )
                    })}

            </div>
            <div>
                <label>
                    <input type="color" vaule={backgroundC} onChange={handleSelector}/>
                </label>
            </div>

        </div>



    );
}

