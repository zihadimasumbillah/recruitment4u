import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody } from "@/components/ui/3d-card";

const HomeEmploy = () => {
  const stats = [
    {
      number: "1",
      title: "3000 EMPLOYED WORKERS",
      description:
        "In the past two years, we have brought over 5000 third-country nationals to European Countries. With over 10% of the total market for foreign workers, we are a leading agency in mediating the employment of foreign workers.",
    },
    {
      number: "2",
      title: "450+ SATISFIED CLIENTS",
      description:
        "We take pride in having built cooperation with numerous large enterprises as well as small and medium-sized businesses that have had the greatest need for labor during the current economic expansion.",
    },
    {
      number: "3",
      title: "15 HUMAN RESOURCES EXPERTS",
      description:
        "Our team of 15 experts is constantly available to employers, providing maximum quality service for each area of human resources.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Container remains unchanged */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 max-w-[300px] sm:max-w-full mx-auto">
            <CardContainer className="w-full !p-0" containerClassName="!py-0">
              <CardBody className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden">
                {/* Updated background gradient using primary-secondary */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-secondary/60 to-primary-secondary/70">
                  <Image
                    src="/images/employ-1.png"
                    alt="Employment Services"
                    fill
                    className="object-contain p-2 sm:p-4 rounded-lg opacity-85 mix-blend-multiply hover:opacity-90 transition-all duration-300"
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                </div>
                {/* Updated overlay gradient */}
                <div className="absolute inset-0 rounded-lg shadow-xl bg-gradient-to-r from-primary-secondary/10 to-transparent" />
              </CardBody>
            </CardContainer>
          </div>
          {/* Content with updated text colors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
              Your partner in{" "}
              <span className="text-primary block sm:inline">
                talent recruitment
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              We specialize in recruiting and selecting foreign workers from
              recruitment centers such as <strong>Bangladesh</strong>, the{" "}
              <strong>Philippines</strong>, <strong>India</strong>,
              <strong>Nepal</strong>, <strong>Malaysia</strong>,{" "}
              <strong>Singapore</strong>, <strong>KSA</strong>,{" "}
              <strong>Qatar</strong>, and the{" "}
              <strong>United Arab Emirates</strong>. From our central offices in{" "}
              <strong>Dubai</strong>, we place workers in countries such as the{" "}
              <strong>UK</strong>, <strong>Croatia</strong>,{" "}
              <strong>Malta</strong>, <strong>Bulgaria</strong>,{" "}
              <strong>Poland</strong>,<strong>Romania</strong>, and other
              European Countries.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid with updated text colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative mt-16 lg:mt-24">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 70,
                  damping: 12,
                }}
                className={cn(
                  "p-4",
                  "bg-white shadow-sm",
                  "relative group", 
                  "hover:shadow-lg transition-all duration-300",
                  "transform hover:-translate-y-1",
                  "rounded-lg",
                  "hover:bg-primary" 
                )}
              >
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center 
                      transition-all duration-300 group-hover:bg-white">
                      <span className="text-2xl font-bold text-primary 
                        group-hover:text-primary transition-colors duration-300">
                        {stat.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-white 
                    transition-colors duration-300">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-sm text-black pl-16 leading-relaxed 
                  group-hover:text-white/90 transition-colors duration-300">
                  {stat.description}
                </p>
              </motion.div>

              {/* Divider with updated color */}
              {(index === 0 || index === 1) && (
                <div
                  className="hidden lg:block absolute w-px bg-black/10"
                  style={{
                    left: `${(index + 1) * (100 / 3)}%`,
                    transform: "translateX(-50%)",
                    height: "85%",
                    top: "8%",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEmploy;
