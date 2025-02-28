import { useState } from "react";
import { ChevronDown, Building2, Users2, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import NoSelector from "@/components/common/Noselector";

export default function AgencySection() {
  const [openItem, setOpenItem] = useState<number>(0);

  const accordionItems = [
    {
      title: "Find the best candidates.",
      content:
        "Recruitment4u specializes in helping companies break free from unnecessary geographical limitations—so you can hire the best person in the world, not just the best person nearby.",
    },
    {
      title: "Automate business processes.",
      content:
        "We focus on automating business operations to simplify all processes: from collecting candidate applications, selection, interviews, verification of workers' documentation to contract creation and issuing permits. All our processes are fully automated.",
    },
    {
      title: "Innovate selection processes.",
      content:
        "When hiring foreign workers, it is important to consider the efforts of both parties involved: both the worker and the employer. To ensure that this effort is not in vain, we have developed a multi-phase selection process through which candidates must pass to meet the highest criteria for work in such as the UK, Croatia, Malta, Bulgaria, Poland, Romania, and other European Countries.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-18 w-full overflow-hidden"> 
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Icons Section */}
          <div className="relative order-1 lg:order-1 grid grid-cols-2 gap-4 w-full max-w-md mx-auto lg:mt-4"> {/* Reduced top margin */}
            {/* Top row - Two cards side by side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-primary flex items-center justify-center p-6 sm:p-8"
            >
              <NoSelector>
                <Building2
                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary-secondary"
                  strokeWidth={1.5}
                />
              </NoSelector>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="aspect-square bg-primary flex items-center justify-center p-6 sm:p-8 -mt-4 sm:-mt-8"
            >
              <NoSelector>
                <Users2
                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary-secondary"
                  strokeWidth={1.5}
                />
              </NoSelector>
            </motion.div>

            {/* Bottom row - Centered card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 aspect-square bg-primary flex items-center justify-center p-6 sm:p-8 w-1/2 -mt-10 sm:-mt-14 ml-16 sm:ml-24"
            >
              <NoSelector>
                <Filter
                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary-secondary"
                  strokeWidth={1.5}
                />
              </NoSelector>
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-2 mt-6" // Reduced top margin
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Modern Methods to Restore the Agency Business&apos;s Former Glory
            </h2>

            <div className="space-y-3">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-black/10"
                >
                  <button
                    onClick={() => setOpenItem(openItem === index ? -1 : index)}
                    className="w-full py-2 sm:py-3 lg:py-4 flex justify-between items-center group hover:text-primary transition-colors"
                  >
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-left text-black">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 text-black",
                        openItem === index ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 sm:pb-3 lg:pb-4 text-xs sm:text-sm lg:text-base text-black">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
