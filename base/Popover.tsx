"use client"

// #region imports
import {
	forwardRef,
	ReactNode,
	useState,
	useRef,
	useEffect
} from "react"

import {
	cn
} from "@/utils"
// #endregion

export interface PopoverProps {
    trigger: ReactNode
    children: ReactNode
    className?: string
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    ({
		trigger,
		children,
		className = ""
	}, ref) => {
        const [open, setOpen] = useState(false)
        const popoverRef = useRef<HTMLDivElement>(null)

        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }, [])

        return (
            <div ref={ref} className="relative inline-block">
                <div onClick={() => setOpen(prev => !prev)}>
					{trigger}
				</div>

                {open && (
                    <div
                        ref={popoverRef}
                        className={cn(
                            "absolute z-50  w-max rounded-3xl bg-white shadow-lg p-4 space-y-4 transition-all duration-200 ease-in-out origin-top-right",
                            className
                        )}
                    >
                        {children}
                    </div>
                )}
            </div>
        )
    }
)

Popover.displayName = "Popover"
export default Popover
