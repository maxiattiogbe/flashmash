import { Heading } from "@/components/heading";
import { SquareAsterisk } from "lucide-react";

const GenerateFlashcardsPage = () => {
    return (
        <div>
            <Heading
                title="Generate Flashcards"
                description="Generate flashcards for your favorite topics"
                icon={SquareAsterisk}
                iconColor="text-[#4169e1]"
                bgColor="bg-[#4169e1]/10"
            />
            <p className="text-md text-muted-foreground px-4 lg:px-8">
                Coming soon!
            </p>
        </div>
    )
}   

export default GenerateFlashcardsPage;