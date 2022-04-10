import React from "react";

export const Context = React.createContext<Partial<{plus: () => void, count: number}>>({})