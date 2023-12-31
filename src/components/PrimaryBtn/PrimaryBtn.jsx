import { Button } from "@material-tailwind/react";

const PrimaryBtn = ({children}) => {
    return (
        <Button className="bg-gradient-to-bl from-lightRed to-darkRed">{children}</Button>
    )}
export default PrimaryBtn;