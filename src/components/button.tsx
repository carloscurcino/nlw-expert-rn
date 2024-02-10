import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode;
}

type ButtonTextProps = {
    children: ReactNode;
}
type ButtonIconProps = {
    children: ReactNode;
}
function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity className="h-12 bg-lime-400 rounder-md items-center justify-center flex-row" {...rest}
            activeOpacity={0.7}
        >
            {children}
        </TouchableOpacity>
    )
}

function ButtonText({ children }: ButtonTextProps) {
    return (
        <Text className="text-black font-heading text-base mx-2">
            {children}
        </Text>
    )
}

function ButtonIcon({ children }: ButtonIconProps) {
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }