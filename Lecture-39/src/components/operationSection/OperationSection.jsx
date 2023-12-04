/* eslint-disable react/prop-types */
import shortid from "shortid";
import Button from "../ui/Button";

function OperationSection({ handleArithmeticOps, handleClearOps }) {
    const operations = [
        {
            id: shortid.generate(),
            text: "+",
            onClick: () => handleArithmeticOps("+"),
        },
        {
            id: shortid.generate(),
            text: "-",
            onClick: () => handleArithmeticOps("-"),
        },
        {
            id: shortid.generate(),
            text: "*",
            onClick: () => handleArithmeticOps("*"),
        },
        {
            id: shortid.generate(),
            text: "/",
            onClick: () => handleArithmeticOps("/"),
        },
        {
            id: shortid.generate(),
            text: "%",
            onClick: () => handleArithmeticOps("%"),
        },
        {
            id: shortid.generate(),
            text: "**",
            onClick: () => handleArithmeticOps("**"),
        },
        {
            id: shortid.generate(),
            text: "Clear",
            onClick: handleClearOps,
        },
    ];
    return (
        <div>
            <h2> Operations</h2>
            <div className="btn-group">
                {operations.map(ops => (
                    <Button
                        key={ops.id}
                        text={ops.text}
                        operation={ops.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default OperationSection;
