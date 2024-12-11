import { Button } from "../common/buttons";

export function Footer() {
    return (
        <footer className="bg-black text-white py-24">
            <div className="container">
                <div className="md:grid grid-cols-4 gap-4">
                    <div>
                        <h3 className="text-neutral-300 mb-8">Models</h3>
                        <ul className="space-y-2 mb-16">
                            <li><a href="#" className="text-lg hover:opacity-70">Pixtral Large</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Mistral Large</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Mistral Small</a></li>
                        </ul>
                        <h3 className="text-neutral-300 mb-8">Open Source</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-lg hover:opacity-70">Pixtral 12B</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Mistral NeMo</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Mistral 7B</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-neutral-300 mb-8">Products</h3>
                        <ul className="space-y-2 mb-16">
                            <li><a href="#" className="text-lg hover:opacity-70">La Plateforme</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Le Chat</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Fine Tuning</a></li>
                        </ul>
                        <h3 className="text-neutral-300 mb-8">Usage</h3>
                        <ul className="space-y-2 mb-16">
                            <li><a href="#" className="text-lg hover:opacity-70">Licences</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Pricing</a></li>

                        </ul>
                    </div>
                    <div>
                    <h3 className="text-neutral-300 mb-8">Ressources</h3>
                        <ul className="space-y-2 mb-16">
                            <li><a href="#" className="text-lg hover:opacity-70">Docs</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Roadmap</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Insights</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Research Paper</a></li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="text-neutral-300 mb-8">About</h3>
                        <ul className="space-y-2 mb-16">
                            <li><a href="#" className="text-lg hover:opacity-70">About</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Careers</a></li>
                            <li><a href="#" className="text-lg hover:opacity-70">Partners</a></li>
                            <Button variant="outline">Contact us</Button>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-neutral-800 pt-8 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <span className="text-sm opacity-50">©{new Date().getFullYear()} Mistral AI</span>
                    </div>
                    <div className="md:flex gap-4 items-center justify-end">
                        <span className="text-sm opacity-50">Privacy Policy</span>
                        <span className="text-sm opacity-50">Terms of Services</span>
                        <span className="text-sm opacity-50">Data agreement</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}