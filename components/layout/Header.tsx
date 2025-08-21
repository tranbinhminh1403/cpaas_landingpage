import { AppLogo } from "@/components/icon/AppLogo";

export const Header = () => {
    return (
        <div className="sticky top-0 left-0 right-0 z-50 h-16 backdrop-blur-sm border-b border-white/10">
            <div className="w-[95%] mx-auto h-full px-8">
                <div className="flex items-center justify-between align-center h-full">
                    <div className="flex items-center gap-3 align-center justify-center">
                        <AppLogo className="w-8 h-8"/>
                        <p className="text-xl font-medium">Sent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};