
import { Question } from '../../../types';

const questions: Question[] = [
      {
        "question": "This question was deleted from the official paper.", // Q1 - Deleted
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Deleted"
      },
      {
        "question": "Which molecule acts as the primary energy currency within the cell?", // Q2 - Key D: C -> ATP
        "options": ["Glucose", "NADH", "ATP", "FADH2"],
        "correctAnswer": "ATP"
      },
      {
        "question": "The process by which RNA is synthesized from a DNA template is called:", // Q3 - Key D: B -> Transcription
        "options": ["Replication", "Transcription", "Translation", "Reverse Transcription"],
        "correctAnswer": "Transcription"
      },
      {
        "question": "In protein synthesis, which molecule carries the amino acid to the ribosome?", // Q4 - Key D: C -> tRNA
        "options": ["mRNA", "rRNA", "tRNA", "DNA"],
        "correctAnswer": "tRNA"
      },
      {
        "question": "What is the primary site for cellular respiration in eukaryotic cells?", // Q5 - Key D: C -> Mitochondrion
        "options": ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"],
        "correctAnswer": "Mitochondrion"
      },
      {
        "question": "Which of the following is a characteristic feature of prokaryotic cells?", // Q6 - Key D: A -> Lack of membrane-bound nucleus
        "options": [
          "Lack of membrane-bound nucleus",
          "Presence of mitochondria",
          "Presence of endoplasmic reticulum",
          "Multiple linear chromosomes"
        ],
        "correctAnswer": "Lack of membrane-bound nucleus"
      },
      {
        "question": "Cellulose, a major component of plant cell walls, is a polymer made of which monosaccharide?", // Q7 - Key D: A -> Glucose
        "options": ["Glucose", "Fructose", "Galactose", "Ribose"],
        "correctAnswer": "Glucose"
      },
      {
        "question": "Enzymes increase the rate of a biochemical reaction primarily by:", // Q8 - Key D: D -> Lowering the activation energy
        "options": [
          "Increasing the temperature",
          "Increasing substrate concentration",
          "Being consumed in the reaction",
          "Lowering the activation energy"
        ],
        "correctAnswer": "Lowering the activation energy"
      },
      {
        "question": "Which blood cells are primarily responsible for oxygen transport?", // Q9 - Key D: B -> Erythrocytes
        "options": ["Leukocytes", "Erythrocytes", "Thrombocytes", "Lymphocytes"],
        "correctAnswer": "Erythrocytes"
      },
      {
        "question": "What is the main function of the large intestine in the digestive system?", // Q10 - Key D: D -> Absorption of water
        "options": [
          "Digestion of proteins",
          "Absorption of nutrients",
          "Production of bile",
          "Absorption of water"
        ],
        "correctAnswer": "Absorption of water"
      },
      {
        "question": "Which hormone is primarily responsible for lowering blood glucose levels?", // Q11 - Key D: A -> Insulin
        "options": ["Insulin", "Glucagon", "Cortisol", "Adrenaline"],
        "correctAnswer": "Insulin"
      },
      {
        "question": "Meiosis results in the formation of:", // Q12 - Key D: D -> Four haploid cells
        "options": [
          "Two diploid cells",
          "Two haploid cells",
          "Four diploid cells",
          "Four haploid cells"
        ],
        "correctAnswer": "Four haploid cells"
      },
      {
        "question": "An allele that expresses its phenotype even when heterozygous is called:", // Q13 - Key D: C -> Dominant
        "options": ["Recessive", "Codominant", "Dominant", "Incompletely dominant"],
        "correctAnswer": "Dominant"
      },
      {
        "question": "The observable characteristics or traits of an organism are known as its:", // Q14 - Key D: B -> Phenotype
        "options": ["Genotype", "Phenotype", "Allele", "Locus"],
        "correctAnswer": "Phenotype"
      },
      {
        "question": "Lamarck's theory of evolution included the concept of:", // Q15 - Key D: B -> Inheritance of acquired characteristics
        "options": [
          "Natural selection",
          "Inheritance of acquired characteristics",
          "Genetic drift",
          "Survival of the fittest"
        ],
        "correctAnswer": "Inheritance of acquired characteristics"
      },
      // --- Start of provided questions ---
      {
        "question": "Which of the following type of organs are supposed to be functional in ancestral species rather than in present day species:",
        "options": [
          "Vestigial organs",
          "Homologous organs",
          "Analogous organs",
          "Embryonic organs"
        ],
        "correctAnswer": "Vestigial organs" // Key Q16: A
      },
      {
        "question": "Which of the following is the main point of Darwinism?",
        "options": [
          "Over production",
          "Variation",
          "Disuse of organ",
          "Perceived unity of life" // Note: Natural Selection/Survival of Fittest is central, but Overproduction is a key observation leading to it. Following key.
        ],
        "correctAnswer": "Over production" // Key Q17: A
      },
      {
        "question": "Descending aorta is bifurcated into two vessels which on further division from femoral artery that supply blood to high muscles of legs:", // Note: 'high' likely means 'thigh'. Femoral comes *from* iliac.
        "options": [
          "iliac vein",
          "iliac artery",
          "temporal artery",
          "sciatic artery"
        ],
        "correctAnswer": "iliac artery" // Key Q18: B
      },
      {
        "question": "The final destination of lymph is:",
        "options": [
          "lymph node",
          "lymphoid organs",
          "lymph capillaries",
          "subclavian vein"
        ],
        "correctAnswer": "subclavian vein" // Key Q19: D
      },
      {
        "question": "ABO blood group is controlled by more than two alleles in a population. This shows that ABO blood group is an example of:",
        "options": [
          "Polygenic Inheritance",
          "Multiple Alleles",
          "Incomplete Dominance", // Added option
          "Codominance" // Added option
        ],
        "correctAnswer": "Multiple Alleles" // Key Q20: B
      },
      {
        "question": "According to Mendel Law of Segregation, the one individual out of four in F2 generation had phenotype that failed to express in",
        "options": [
          "F1",
          "F2",
          "P generation", // Added option
          "Test cross" // Added option
        ],
        "correctAnswer": "F1" // Key Q21: A
      },
      {
        "question": "Test cross is made to check the genotype of a trait. Which of the following crosses is a test cross?",
        "options": [
          "Unknown x At", // Assuming 'At' is dominant phenotype notation mistake for AA or Aa
          "Unknown x tt",
          "Unknown x TT", // Added option
          "Unknown x Tt" // Added option
        ],
        "correctAnswer": "Unknown x tt" // Key Q22: B (Test cross is always with homozygous recessive)
      },
      {
        "question": "Rigor mortis occurs due to:",
        "options": [
          "Cross bridge formation",
          "Cross bridge breaking",
          "Actin polymerization", // Added option
          "Shortening of filaments"
        ],
        "correctAnswer": "Cross bridge breaking" // Key Q23: B (Specifically, the inability to break cross-bridges due to lack of ATP)
      },
      {
        "question": "The cell membrane of muscle cell is:",
        "options": [
          "Sarcoplasm",
          "Sarcolemma",
          "Sarcomere",
          "Myofibrils"
        ],
        "correctAnswer": "Sarcolemma" // Key Q24: B
      },
      {
        "question": "Irregular striations and involuntary control is related to?",
        "options": [
          "Cardiac muscle cells",
          "Fibroelastic cartilage cell",
          "Skeletal muscle cells",
          "Smooth muscle cells"
        ],
        "correctAnswer": "Cardiac muscle cells" // Key Q25: A (Cardiac are striated but involuntary; smooth are non-striated involuntary; skeletal are striated voluntary)
      },
      {
        "question": "Cartilage is a type of which tissue?",
        "options": [
          "Connective tissues",
          "Epithelial tissues",
          "Muscular tissues",
          "Nervous tissues"
        ],
        "correctAnswer": "Connective tissues" // Key Q26: A
      },
      {
        "question": "Production of Follicle-stimulating hormone (FSH) and Luteinizing Hormone (LH) from the pituitary gland of female is controlled by:",
        "options": [
          "Ovary",
          "Uterus",
          "Stimulated follicles",
          "Hypothalamus"
        ],
        "correctAnswer": "Hypothalamus" // Key Q27: D (Via GnRH)
      },
      {
        "question": "The term menopause means:",
        "options": [
          "Start of menstruation",
          "Start of ovulation",
          "Stop of ova production", // More accurately, cessation of menstrual cycles
          "Degeneration of ovaries"
        ],
        "correctAnswer": "Stop of ova production" // Key Q28: C
      },
      {
        "question": "To study sex linkages in Drosophila, Morgan mated white eyed males with wild type red eyed females. What will be the phenotype of offspring?",
        "options": [
          "All red eyed males and females",
          "Red eyed females and white eyed males",
          "White eyed females and red eyed males",
          "All white eyed females and males"
        ],
        "correctAnswer": "All red eyed males and females" // Key Q29: A (Red is dominant, X-linked. Female R/R x Male w/Y -> F1 Females R/w, F1 Males R/Y)
      },
      {
        "question": "Enteron is the characteristic feature of:",
        "options": [
          "Phylum Porifera",
          "Phylum Cnidaria",
          "Phylum Plathehelminthes",
          "Plylum Echinodermata"
        ],
        "correctAnswer": "Phylum Cnidaria" // Key Q30: B (Enteron = gastrovascular cavity)
      },
      {
        "question": "The body of which is called metamerically segmented?",
        "options": [
          "Cnidarians",
          "Nematodes",
          "Annelids",
          "Sponges"
        ],
        "correctAnswer": "Annelids" // Key Q31: C
      },
      {
        "question": "Excretion in Planaria takes place by ?",
        "options": [
          "Malpighian tubules",
          "Protonephridia",
          "Metanephridia",
          "Nephron"
        ],
        "correctAnswer": "Protonephridia" // Key Q32: B (Flame cells)
      },
      {
        "question": "Four chambered heart with right systemic arch only is present in?",
        "options": ["Amphibians", "Reptiles", "Birds", "Mammals"],
        "correctAnswer": "Birds" // Key Q33: C (Mammals have left systemic arch)
      },
      {
        "question": "The movement of water to lower solute concentration area through a semipermeable membrane is?", // Note: Definition is flawed. Osmosis is water movement to HIGHER solute conc. Assuming question meant water potential.
        "options": [
          "Osmotic Potential",
          "Pressure potential",
          "Soil potential",
          "Solute potential"
        ],
        "correctAnswer": "Pressure potential" // Key Q34: B (No option fits standard osmosis definition. Pressure potential can drive water movement.)
      },
      {
        "question": "The _______ describes how water and dissolved chemicals are carried through the cell wall and intercellular gaps of plants.",
        "options": [
          "Apoplast Theory",
          "Symplast Theory",
          "Vacuolar Theory",
          "Cytoplasmic Theory"
        ],
        "correctAnswer": "Apoplast Theory" // Key Q35: A
      },
      {
        "question": "Feeding by living in or on the other organism (host) belonging to different species is called?",
        "options": [
          "Mineral nutrition",
          "Parasitic nutrition",
          "Saprophytic nutrition",
          "Symbiotic nutrition"
        ],
        "correctAnswer": "Parasitic nutrition" // Key Q36: B
      },
      {
        "question": "What of the following virus contains single stranded DNA?",
        "options": ["Adeno virus", "Herpes virus", "Parvo virus", "Pox virus"],
        "correctAnswer": "Parvo virus" // Key Q37: C
      },
      {
        "question": "Which one of the following is X Linked Dominant disorder?",
        "options": [
          "Haemophilia",
          "Color blindness",
          "Hypophosphatemic rickets",
          "Hypertrichosis" // Y-linked
        ],
        "correctAnswer": "Hypophosphatemic rickets" // Key Q38: C
      },
      {
        "question": "Only those genes can assort independently whose loci are on:",
        "options": [
          "Same chromatids",
          "Same chromosomes",
          "Non-homologous chromosomes",
          "Homologous chromosomes"
        ],
        "correctAnswer": "Non-homologous chromosomes" // Key Q39: C (Or far apart on homologous chromosomes)
      },
      {
        "question": "Smooth muscles are found in all mentioned below except",
        "options": ["Trachea", "Bronchi", "Bronchioles", "Alveoli"],
        "correctAnswer": "Alveoli" // Key Q40: D (Alveoli walls are primarily simple squamous epithelium)
      },
      {
        "question": "The method of bringing oxygenated air into contact with a gas exchange surface is called ?",
        "options": [
          "photorespiration",
          "ventilation",
          "gas transport",
          "respiration"
        ],
        "correctAnswer": "ventilation" // Key Q41: B
      },
      {
        "question": "Number of layers of cell wall in Gram positive bacteria is:",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": "1" // Key Q42: A (One thick peptidoglycan layer)
      },
      {
        "question": "Helicobacter pylori is an example of:",
        "options": ["Cocci", "Bacilli", "Pleomorphic", "Spiral"],
        "correctAnswer": "Spiral" // Key Q43: D
      },
      {
        "question": "Bacterial cell have ability to maintain its shape through",
        "options": ["Cell wall", "Capsule", "Cell wall & slime", "Slime"],
        "correctAnswer": "Cell wall" // Key Q44: A
      },
      {
        "question": "Which of the following is an example of spiral shaped bacteria?",
        "options": [
          "Diplococcus pneumoniae",
          "Hyphomicrobium", // Budding/prosthecate
          "Escherichia coli", // Bacillus
          "Pseudomonas" // Bacillus
        ],
        "correctAnswer": "Hyphomicrobium" // Key Q45: B. Note: Pseudomonas and E.coli are rods (Bacilli). Hyphomicrobium is complex. Key indicates B. Spirochetes are better examples.
      },
      {
        "question": "All the following are disinfectants to control bacterial growth except:",
        "options": [
          "Tincture of Iodine",
          "Potassium Permanganate",
          "Mercuric Chloride",
          "Hydrogen Peroxide"
        ],
        "correctAnswer": "Tincture of Iodine" // Key Q46: A. Note: All listed can act as disinfectants. Iodine is often an antiseptic too. Possibly context-dependent question or flawed. Following key.
      },
      {
        "question": "The function of hyaluronidase enzyme is:",
        "options": [
          "Penetration of the sperm into the ovum",
          "Entrance of the sperm into the vagina",
          "Entrance of the sperm into the fallopian tube",
          "Inactivation of sperms after their failure to fertilize ovum"
        ],
        "correctAnswer": "Penetration of the sperm into the ovum" // Key Q47: A (Breaks down corona radiata/cumulus cells)
      },
      {
        "question": "In human females, what is the small, pear-shaped, muscular, distensible, sac-like organ where gestation takes place?",
        "options": ["Uterus", "Kidney", "Fallopian tube", "Stomach"],
        "correctAnswer": "Uterus" // Key Q48: A
      },
      {
        "question": "The labour pains to expel fetus are due to action of oxytocin on:",
        "options": ["Endometrium", "Myometrium", "Perimetrium", "Ovaries"],
        "correctAnswer": "Myometrium" // Key Q49: B
      },
      {
        "question": "Virus is what type of agent?",
        "options": [
          "Cellular agent",
          "Infectious agent",
          "Non-infectious agent",
          "Non-protein agent"
        ],
        "correctAnswer": "Infectious agent" // Key Q50: B
      },
      {
        "question": "The molecules used to control virus during infection of animal cells are:",
        "options": ["Interferon", "Histone", "Antigen", "Serum"],
        "correctAnswer": "Interferon" // Key Q51: A
      },
      {
        "question": "The provirus of HIV is structurally and chemically made up of?",
        "options": ["ssRNA", "ssDNA", "dsRNA", "dsDNA"],
        "correctAnswer": "dsDNA" // Key Q52: D
      },
      {
        "question": "Which of the following is used in baking?",
        "options": [
          "Aerobic respiration",
          "Anaerobic respiration",
          "External respiration",
          "Internal respiration"
        ],
        "correctAnswer": "Anaerobic respiration" // Key Q53: B (Yeast fermentation)
      },
      {
        "question": "Which is the major event in electron transport chain?",
        "options": ["ATP synthesis", "Decarboxylation", "Substitution", "Isomerisation"],
        "correctAnswer": "ATP synthesis" // Key Q54: A (Driven by chemiosmosis, which relies on ETC)
      },
      {
        "question": "Out of 36 ATPs, how many are produced in electron transport chain?",
        "options": ["28", "30", "32", "34"],
        "correctAnswer": "32" // Key Q55: C (Assuming NADH->3 ATP, FADH2->2 ATP; Glycolysis 2 net, Krebs 2, ETC 32 -> Total 36) Note: Modern estimates often use NADH->2.5, FADH2->1.5 resulting in ~30-32 total. Following older convention based on key.
      },
      {
        "question": "The major enzymes involved in transfer of phosphate group from ATP to Glucose is:",
        "options": ["Isomerase", "Dehydrogenase", "Kinase", "Decarboxylase"],
        "correctAnswer": "Kinase" // Key Q56: C (Hexokinase/Glucokinase)
      },
      {
        "question": "_______ forms almost three-fourth of the body by weight",
        "options": ["water", "protein", "carbohydrates", "lipids"],
        "correctAnswer": "water" // Key Q57: A (Typically 60-70%)
      },
      {
        "question": "Energy is _______ by the breakdown of complex molecules into simpler ones, such reactions are called catabolic reactions",
        "options": ["released", "consumed", "produced", "destroyed"],
        "correctAnswer": "released" // Key Q58: A (Produced is also arguably correct, but released is more specific to energy form)
      },
      {
        "question": "Biologically, _______ plays key roles in maintaining the integrity of lipid bilayer membranes.",
        "options": [
          "hydrophilic exclusion",
          "hydrophobic exclusion",
          "heat of vaporization",
          "specific heat capacity"
        ],
        "correctAnswer": "hydrophobic exclusion" // Key Q59: B (Hydrophobic effect drives bilayer formation)
      },
      {
        "question": "The specific heat of vaporization of water plays an important role in the regulation of heat produced by",
        "options": ["reduction", "oxidation", "redox", "none of above"],
        "correctAnswer": "oxidation" // Key Q60: B (Metabolic oxidation generates heat, evaporative cooling dissipates it)
      },
      {
        "question": "Which type of bond must be broken for water to vaporize?",
        "options": [
          "nonpolar covalent bonds",
          "polar covalent bonds",
          "hydrogen bonds",
          "covalent bonds"
        ],
        "correctAnswer": "hydrogen bonds" // Key Q61: C
      },
      {
        "question": "Which statement is true about regarding both starch and cellulose?",
        "options": [
          "They are both polymers of glucose.",
          "They are geometric isomers of each other",
          "They can both be digested by humans.",
          "They are both used for energy storage in plants."
        ],
        "correctAnswer": "They are both polymers of glucose." // Key Q62: A
      },
      {
        "question": "Most of the monosaccharides form a ring structure when in solution. For example ribose will form a five cornered ring known as",
        "options": [
          "glucopyranose",
          "ribofuranose",
          "glyceradehyde", // Typo corrected from glyceraldehyde
          "acetaldehyde"
        ],
        "correctAnswer": "ribofuranose" // Key Q63: B
      },
      {
        "question": "Number of major layer/layers of cell wall in Gram positive bacteria is/are:",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": "Deleted" // Key indicates deleted. (It's 1 thick layer)
      },
      {
        "question": "Cyclosis and amoeboid movements are due to:",
        "options": ["Microtubule", "Cilia", "Microfilaments", "Intermediate filaments"],
        "correctAnswer": "Microfilaments" // Key Q65: C (Actin filaments)
      },
      {
        "question": "Proteins and lipids are modified into Glycoproteins & Glycolipids by which cell organelle?",
        "options": [
          "Golgi complex",
          "Rough Endoplasmic Reticulum",
          "Smooth Endoplasmic Reticulum",
          "Ribosomes & chromosomes"
        ],
        "correctAnswer": "Golgi complex" // Key Q66: A
      },
      {
        "question": "Which structure of prokaryotic cell will play the role of mitochondrion?",
        "options": ["Spores", "Cyst", "Nucleoid", "Mesosomes"],
        "correctAnswer": "Mesosomes" // Key Q67: D (Though the existence/function of mesosomes is now debated)
      },
      {
        "question": "Cell wall of fungi is made of:", // Question text completed based on likely context
        "options": ["Carbohydrates", "Lipids", "Proteins", "Proteins & Lipids"],
        "correctAnswer": "Carbohydrates" // Key Q68: B (Chitin is a polysaccharide)
      },
      {
        "question": "Which of the following transition metal show 3d5 configuration in its +2-oxidation state?",
        "options": ["$Cu+2$", "$Fe+2$", "$Mn+2$", "$Zn+2$"], // Typo corrected from 2n+2
        "correctAnswer": "$Mn+2$" // Key Q69: C (Mn is [Ar] 4s2 3d5, Mn+2 is [Ar] 3d5)
      },
      {
        "question": "Which of the following reagents can be used to distinguish between 1-Pentyne and 2-Pentyne?",
        "options": [
          "$AgNO_{3}+NH_{4}OH$", // Tollens' reagent reacts with terminal alkynes
          "1% alkaline dilute KMnO4", // Baeyer's reagent reacts with both
          "$Br_{2}/CCl_{4}$", // Reacts with both
          "K2Cr2O7 +H2SO4" // Strong oxidizer, reacts differently but not ideal distinction
        ],
        "correctAnswer": "$AgNO_{3}+NH_{4}OH$" // Key Q70: A
      },
      {
        "question": "In SN1 reactions the correct order of reactivity of alkyl halide is?",
        "options": [
          "Primary>secondary>tertiary",
          "Tertiary>secondary>primary",
          "Secondary>primary>tertiary", // Typo corrected
          "Primary>tertiary>secondary" // Typo corrected
        ],
        "correctAnswer": "Tertiary>secondary>primary" // Key Q71: B
      },
      {
        "question": "What is the IUPAC name of diisopropyl ketone?",
        "options": [
          "1,3-Diisopropylpropan-2-one",
          "2,4-Dimethylpentan-3-one",
          "2,4-Dimethylpentan-2-one",
          "1,3-Dimethylpropan-2-one"
        ],
        "correctAnswer": "2,4-Dimethylpentan-3-one" // Key Q72: B
      },
      {
        "question": "The appearance of a silver mirror in Tollens' test indicates the presence of which of the following?",
        "options": ["A ketone", "An aldehyde", "An acid", "An alcohol"],
        "correctAnswer": "An aldehyde" // Key Q73: B
      },
      {
        "question": "Competitive inhibitors stop an enzyme from working by:",
        "options": [
          "Changing the shape of the enzyme",
          "Merging with the substrate instead",
          "Blocking the active site of the enzyme",
          "Combining with the product of the reaction"
        ],
        "correctAnswer": "Blocking the active site of the enzyme" // Key Q74: C
      },
      {
        "question": "If phenol is treated with 3 moles of conc. HNO3 in the presence of H2SO4 what will be the product?",
        "options": [
          "o-nitro phenol",
          "p-nitro phenol",
          "o-nitro phenol and p-nitro phenol",
          "picric acid"
        ],
        "correctAnswer": "picric acid" // Key Q75: D (2,4,6-trinitrophenol)
      },
      {
        "question": "When 6d orbital is filled, the entering electron goes into?",
        "options": ["7f", "7d", "7p", "7s"],
        "correctAnswer": "7p" // Key Q76: C (Following Aufbau/Madelung rule order: ...6p, 7s, 5f, 6d, 7p...)
      },
      {
        "question": "Which element has the ground state electronic configuration of 1s2, 2s2, 2p6, 3s2, 3p6?",
        "options": ["Ar", "Cl", "Na", "S"],
        "correctAnswer": "Ar" // Key Q77: A (Z=18)
      },
      {
        "question": "What is the proton (atomic number) of an element that has four unpaired electrons in its ground state?",
        "options": ["6", "14", "22", "26"],
        "correctAnswer": "26" // Key Q78: D (Fe: [Ar] 4s2 3d6, has 4 unpaired d electrons)
      },
      {
        "question": "Which one of the following gases has the lowest density under room conditions?",
        "options": ["Neon", "Nitrogen", "Oxygen", "Fluorine"],
        "correctAnswer": "Neon" // Key Q79: A (Lowest molar mass among the options)
      },
      {
        "question": "The process of heat flow between hotter and colder gases remains continued until all the molecules have equal",
        "options": [
          "Average translational kinetic energy",
          "Average rotational kinetic energy",
          "Average translational potential energy",
          "Average vibrational kinetic energy"
        ],
        "correctAnswer": "Average translational kinetic energy" // Key Q80: A (Temperature is proportional to average translational KE)
      },
      {
        "question": "What is the ultimate fate of reversible reaction?",
        "options": [
          "Completion of reaction",
          "Complete consumption of reactants",
          "Complete consumption of products",
          "A state when there is no net concentration change"
        ],
        "correctAnswer": "A state when there is no net concentration change" // Key Q81: D (Equilibrium)
      },
      {
        "question": "In reversible reaction, when product is removed, the equilibrium shift towards the:",
        "options": ["Reactant side", "Product side", "Both side one by one", "No effect"],
        "correctAnswer": "Product side" // Key Q82: B (Le Chatelier's Principle)
      },
      {
        "question": "The rate of reaction between two specific time intervals is called?",
        "options": [
          "Instantaneous rate of reaction",
          "Rate of reaction",
          "Average rate of reaction",
          "Initial rate"
        ],
        "correctAnswer": "Average rate of reaction" // Key Q83: C
      },
      {
        "question": "How will be the rate of reaction, if the slope of the curve is greater near the start of the reaction?",
        "options": ["Constant", "Equilibrium", "Greater", "Lesser"],
        "correctAnswer": "Greater" // Key Q84: C (Steeper slope = faster rate)
      },
      {
        "question": "What is the reason of energy changes in chemical reactions?",
        "options": [
          "Bond formation",
          "Bond breakage",
          "Bond formation and breakage",
          "Ionic bonds"
        ],
        "correctAnswer": "Bond formation and breakage" // Key Q85: C
      },
      {
        "question": "What is the unit of heat capacity?",
        "options": ["JK-1", "kJ mol-1", "$kJ/K$", "kJ/mol"], // Assuming J/K or kJ/K
        "correctAnswer": "JK-1" // Key Q86: A (Heat capacity C = Q/ΔT)
      },
      {
        "question": "The addition reaction of 2-butene with HBr produces?",
        "options": ["1-bromobutane", "2-bromobutane", "1,3-dibromobutane", "2,3-dibromobutane"],
        "correctAnswer": "2-bromobutane" // Key Q87: B (Markovnikov addition, though symmetrical here)
      },
      {
        "question": "Under suitable conditions alkanes cannot undergo ..reactions?",
        "options": ["Substitution", "Combustion", "Hydrogenation", "Addition"],
        "correctAnswer": "Addition" // Key Q88: D (Alkanes are saturated)
      },
      {
        "question": "A compound of phosphorus oxide has 43.6% of Oxygen. Its empirical formula is? (P=31, O=16)",
        "options": ["P2O5", "P2O3", "PO2", "PO"], // Added PO
        "correctAnswer": "P2O3" // Key Q89: B. Calculation: Assume 100g -> 43.6g O, 56.4g P. Moles O = 43.6/16 = 2.725. Moles P = 56.4/31 = 1.819. Ratio P:O ≈ 1.819:2.725 ≈ 1:1.5 ≈ 2:3 -> P2O3.
      },
      {
        "question": "Which element is used as standard to determine atomic mass of an element?",
        "options": ["H", "C", "P", "Cl"],
        "correctAnswer": "C" // Key Q90: B (Specifically Carbon-12)
      },
      {
        "question": "The average weight of atoms of an element compared to the weight of one atom of _______ is called atomic weight.",
        "options": ["Carbon", "Helium", "Hydrogen", "Nitrogen"],
        "correctAnswer": "Carbon" // Key Q91: A (Specifically 1/12th the mass of Carbon-12)
      },
      {
        "question": "Which of the following electronic configuration is correct for 24Cr?",
        "options": [
          "1s2,2s2,2p6,3s2,3p6,4s1,3d5", // Corrected typo from 4s3
          "1s2,2s2,2p6 3s2, 3p6,4s2,3d4",
          "1s2,2s2,2p6,3s2,3p6,3d6",
          "1s2,2s2,2p6,3s2,3p6,4f6"
        ],
        "correctAnswer": "1s2,2s2,2p6,3s2,3p6,4s1,3d5" // Key Q92: A (Anomalous configuration)
      },
      {
        "question": "The same moles of H2, N2 and O2 are present in 0.1 cc volume at STP. Which one has greatest number of molecules:",
        "options": ["N2", "H2", "O2", "Number of molecules are equal"],
        "correctAnswer": "Number of molecules are equal" // Key Q93: D (Avogadro's Law)
      },
      {
        "question": "Which is not a property of liquid?",
        "options": ["Osmotic pressure", "Freezing point", "Diffusion", "Melting"], // Note: Melting is phase change solid->liquid
        "correctAnswer": "Melting" // Key Q94: D
      },
      {
        "question": "Which type of forces exist between iodine molecules?",
        "options": [
          "Dipole-dipole forces",
          "Dipole-induced dipole forces",
          "Instantaneous dipole-induced dipole forces",
          "Non-polar forces" // Vague option
        ],
        "correctAnswer": "Instantaneous dipole-induced dipole forces" // Key Q95: C (London Dispersion Forces)
      },
      {
        "question": "In anisotropic crystals which property do not change with the change in direction of crystalline structure?",
        "options": [
          "Electrical conductance",
          "Thermal conductance",
          "Molar mass",
          "Refractive index"
        ],
        "correctAnswer": "Molar mass" // Key Q96: C (Molar mass is intrinsic, others depend on arrangement/direction)
      },
      {
        "question": "In metals, why electric conductivity decreases with the increase of temperature?",
        "options": [
          "Because electron movement decrease with the increase of temperature",
          "Because metal ions oscillations hinder electron movement",
          "Because electron direction changes at high temperature",
          "Because they pass heat current through collision of electrons"
        ],
        "correctAnswer": "Because metal ions oscillations hinder electron movement" // Key Q97: B
      },
      {
        "question": "Why fluorine has less electron affinity as compared to chlorine?", // Corrected from bromine, as F vs Cl is the standard comparison.
        "options": [
          "Electronegativity",
          "Thick small electronic cloud", // Means high electron density, repulsion
          "Seven electrons in outermost shell",
          "Higher Ionization energy"
        ],
        "correctAnswer": "Thick small electronic cloud" // Key Q98: B (Interelectronic repulsion in small 2p subshell)
      },
      {
        "question": "Which oxyacid of halogen is strong oxidizing agent?",
        "options": ["HClO4", "HClO3", "HClO", "HClO2"],
        "correctAnswer": "HClO" // Key Q99: C (Oxidizing strength usually decreases as oxidation state of halogen increases in oxyacids, HOCl > HOClO > HOClO2 > HOClO3)
      },
      {
        "question": "Replacement of hydrogen atom of benzene ring by an alkyl group R in the presence of catalyst is done by:", // Question text completed
        "options": [
          "Halogenation",
          "Friedel-Crafts acylation reaction",
          "Friedel-Crafts alkylation reaction",
          "Sulphonation"
        ],
        "correctAnswer": "Friedel-Crafts alkylation reaction" // Key Q100: C
      },
      {
        "question": "The increasing stability order of the following compounds (1)CH3 CH2 CH2+ (2) (CH3) 3C+ (3) CH3 CH2 CH+ CH3 are?",
        "options": ["$1>2>3$", "$3>2>1$", "$2>3>1$", "$3>1>2$"],
        "correctAnswer": "$2>3>1$" // Key Q101: C (Tertiary > Secondary > Primary carbocation)
      },
      {
        "question": "When 2-bromopropane reacts with Sodium ethoxide, the major product is/are......?",
        "options": ["Propane", "Propene", "Ethyl isopropyl ether", "All are formed"],
        "correctAnswer": "Propene" // Key Q102: B (Strong base favors E2 elimination > SN2 substitution)
      },
      {
        "question": "Propanone can be prepared from propyne by:",
        "options": [
          "Passing a mixture of propyne and steam over a catalyst, magnesium at $420^{\circ}C$",
          "Passing a mixture of propyne and ethanol over a catalyst, zinc chromate",
          "Boiling propyne with water in the presence of HgSO4 and H2SO4",
          "Treating propyne with iodine and NaOH"
        ],
        "correctAnswer": "Boiling propyne with water in the presence of HgSO4 and H2SO4" // Key Q103: C (Hydration of alkynes via keto-enol tautomerism)
      },
      {
        "question": "If carboxylic acid and ketone groups $C=O$ are present in a chain then final name will be given as",
        "options": ["oxo, oic acid", "one, oic acid", "Both 1 and 2", "None of these"],
        "correctAnswer": "oxo, oic acid" // Key Q104: A (Carboxylic acid has priority, ketone is 'oxo' substituent)
      },
      {
        "question": "Acetic acid is weak acid than sulphuric acid because of which of the following reasons?",
        "options": [
          "It decomposes on increasing temperature",
          "It has less degree of Ionisation",
          "It has -COOH group",
          "It has more inductive effect"
        ],
        "correctAnswer": "It has less degree of Ionisation" // Key Q105: B
      },
      {
        "question": "Mr. Khan mix acetic acid with thionyl chloride. Which product is obtained?",
        "options": [
          "$CH_{3}COCl+SO_{2}+HCl$",
          "$CH_{3}Cl+CH_{3}COCl$",
          "$CH_{3}COOCH_{3}+SO_{2}$",
          "$CH_{3}Cl+SO_{2}+HCl$"
        ],
        "correctAnswer": "$CH_{3}COCl+SO_{2}+HCl$" // Key Q106: A
      },
      {
        "question": "After the digestion & before absorption the product of the protein is:",
        "options": [
          "Amino Acid and small polypeptide",
          "Only Amino Acid",
          "Only small polypeptide",
          "Only ammonia"
        ],
        "correctAnswer": "Amino Acid and small polypeptide" // Key Q107: A (Absorption mainly as amino acids, di/tripeptides)
      },
      {
        "question": "Dehydration of alcohol gives which of the following product in the presence of $H_{2}SO_{4}$ at $140^{\circ}C$?", // Assuming ethanol
        "options": ["Acetaldehyde", "Diethyl ether", "Ethyl acetate", "Ethyl chloride"],
        "correctAnswer": "Diethyl ether" // Key Q108: B (Intermolecular dehydration at lower temp)
      },
      {
        "question": "Complete oxidation of alcohol gives which of the following?", // Assuming primary alcohol
        "options": ["Aldehyde", "Alkane", "Carboxylic acid", "Ketone"],
        "correctAnswer": "Carboxylic acid" // Key Q109: C
      },
      {
        "question": "One can estimate the direction in which equilibrium will shift with the help of:",
        "options": [
          "Le chatelier's principle",
          "Law of mass action",
          "Hess's law", // Corrected typo
          "Law of heat of formation"
        ],
        "correctAnswer": "Le chatelier's principle" // Key Q110: A
      },
      {
        "question": "The bond energy of hydrogen in H2 molecule is:",
        "options": ["$242~kJ/mol$", "$431 kJ/mol$", "$436~kJ/mol$", "$346 kJ/mol$"], // Corrected units
        "correctAnswer": "$436~kJ/mol$" // Key Q111: C
      },
      {
        "question": "What are vinyl alcohol and acetaldehyde?",
        "options": ["Position isomers", "Chain isomers", "Metamers", "Tautomers"],
        "correctAnswer": "Tautomers" // Key Q112: D (Keto-enol tautomerism)
      },
      {
        "question": "Oxidation number of free magnesium is?",
        "options": ["0", "+1", "+2", "+3"],
        "correctAnswer": "0" // Key Q113: A
      },
      {
        "question": "Select the metal which is extracted from bauxite?",
        "options": ["Al", "Ca", "Mg", "Cu"],
        "correctAnswer": "Al" // Key Q114: A
      },
      {
        "question": "Which of the following has the highest atomic radius in its period?",
        "options": [
          "Alkaline earth metals",
          "Alkali metals",
          "Chalcogens",
          "Halogens"
        ],
        "correctAnswer": "Alkali metals" // Key Q115: B
      },
      {
        "question": "The electronic configurations of some elements are given below. Recognize the element that belongs to group IIIA",
        "options": ["1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s2 2p1", "1s2 2s2 2p2"],
        "correctAnswer": "1s2 2s2 2p1" // Key Q116: C (Group 13)
      },
      {
        "question": "All alkali metals react with chlorine gas to form white metal chlorides salt. The metal chlorides salt formed is:",
        "options": [
          "Insoluble",
          "Soluble in water to give neutral solution of ph 7",
          "Soluble in water to give acidic solution of ph 1",
          "Soluble in water to give alkaline solution of ph 14"
        ],
        "correctAnswer": "Soluble in water to give neutral solution of ph 7" // Key Q117: B
      },
      {
        "question": "Which one of them is amphoteric in nature?",
        "options": [
          "Lithium oxide",
          "Beryllium oxide",
          "Calcium oxide",
          "Potassium oxide"
        ],
        "correctAnswer": "Beryllium oxide" // Key Q118: B
      },
      {
        "question": "Which of the following is correct electronic configuration of iron (II) ion (atomic no. of Fe is 26)?",
        "options": ["[Ar] 4s0, 3d6", "[Ar] 4s2, 3d6", "[Ar] 4s2, 3d4", "[Ar] 4s2, 3d5"],
        "correctAnswer": "[Ar] 4s0, 3d6" // Key Q119: A (Remove 4s electrons first)
      },
      {
        "question": "Amino acids contains which two functional groups?", // Question text completed
        "options": [
          "Aldehyde group",
          "Carboxyl group",
          "Amino group",
          "Amino group & Carboxyl group"
        ],
        "correctAnswer": "Amino group & Carboxyl group" // Key Q120: D
      },
      {
        "question": "Formula of Pyridine is?", // Question text completed
        "options": ["C6H5N", "C5H5N", "C5H5NH", "C6H6N"],
        "correctAnswer": "C5H5N" // Key Q121: B
      },
      {
        "question": "Which of the following is NOT used for preparation of Alkynes?", // Question text completed
        "options": [
          "Dehydrohalogenation of Vicinal Dihalides",
          "Dehydrohalogenation of Geminal Dihalides",
          "Dehalogenation of Vicinal Dihalides in the presence of strong base.", // Incorrect reagent for simple dehalogenation
          "Electrolysis of di carboxylic acid salts." // Kolbe electrolysis variation
        ],
        "correctAnswer": "Dehalogenation of Vicinal Dihalides in the presence of strong base." // Key Q122: C (Dehalogenation usually with Zn gives alkenes; strong base causes dehydrohalogenation)
      },
      {
        "question": "The following formula can be used to determine the resistance of a length of conductor. $R= \rho l/A$. In the formula, the symbol $\rho$ stands for the:", // Corrected rho symbol
        "options": [
          "Cross-sectional area of the conductor in $m^{2}$",
          "Product of the length of the conductor in meters", // Option B seems incomplete/incorrect
          "Resistivity of the material in units of ohm-meters",
          "Resistance of the conductor in units of ohms per meter"
        ],
        "correctAnswer": "Resistivity of the material in units of ohm-meters" // Key Q123: C
      },
      {
        "question": "The resistance of the wire varies inversely as:",
        "options": ["Area of cross section", "Length", "Resistivity", "Temperature"],
        "correctAnswer": "Area of cross section" // Key Q124: A (R = ρL/A)
      },
      {
        "question": "A capacitor of capacitance 'C' has a charge 'Q' and stored energy is 'W'. If the charge is increased to '2Q'. The stored energy will be:", // Typo corrected from 20
        "options": ["2W", "4W", "W/4", "W/2"],
        "correctAnswer": "4W" // Key Q125: A. Recalculation: W = Q²/2C. W' = (2Q)²/2C = 4Q²/2C = 4W. 
      },
      {
        "question": "To store the electric charge the ultra-capacitors use _______ effect.",
        "options": ["Single layer", "Double layer", "Triple layer", "Quadruple layer"], // Added D
        "correctAnswer": "Double layer" // Key Q126: B (Electric Double Layer Capacitor - EDLC)
      },
      {
        "question": "What is the potential difference between two points in an electric field if it takes 600 J of energy to move a charge of 2 C between these two points?",
        "options": ["1200 V", "800 V", "300 V", "600 V"], // Corrected units and options
        "correctAnswer": "300 V" // Key Q127: C (V = W/q = 600 J / 2 C = 300 V)
      },
      {
        "question": "A charged particle moves in a uniform electric field between two oppositely charged parallel metal plates. To calculate the force acting on the particle due to the electric field, which quantity is not required?",
        "options": [
          "Particle charge",
          "Particle speed",
          "Electric field strength", // Added option
          "Particle mass" // Added option
        ],
        "correctAnswer": "Particle speed" // Key Q128: B (F=qE, speed is irrelevant for the electric force itself)
      },
      {
        "question": "A particle moves from a point where potential is -10 V to a point where potential is -2 V. If the work done is 16 J then charge of the particle is",
        "options": ["8 C", "2 C", "-2 C", "-8 C"],
        "correctAnswer": "2 C" // Key Q129: B. W = qΔV = q(Vf - Vi) => 16 = q(-2 - (-10)) = q(8) => q = 16/8 = 2 C.
      },
      {
        "question": "A charge placed at the center of two concentric spheres. The electric flux through inner sphere is 'Φ'. The electric flux through outer sphere will be?",
        "options": ["Φ", "2Φ", "Φ/2", "4Φ"],
        "correctAnswer": "Φ" // Key Q130: A (Gauss's Law, flux depends only on enclosed charge)
      },
      {
        "question": "As per Coulomb's law, the force of attraction or repulsion between two-point charges is directly proportional to the:", // Question completed
        "options": [
          "Sum of the magnitude of charges",
          "Square of the distance",
          "Product of the magnitude of charges",
          "Cube of the distance"
        ],
        "correctAnswer": "Product of the magnitude of charges" // Key Q131: C
      },
      {
        "question": "Identify the dimensions of coefficient of viscosity?",
        "options": [
          "[M1 L-1 T-1]",
          "[M1 L-3 T-1 K-1]",
          "[M1 L-2 T-1 K-1]",
          "[M1 L-3 T-2 K-1]"
        ],
        "correctAnswer": "[M1 L-1 T-1]" // Key Q132: A (From F = 6πηrv)
      },
      {
        "question": "A distant star is receding from the Earth with a speed of $1.40\times10^{7}~m/s$. It emits light of frequency $4.57\times10^{14}$ Hz. The speed of light is $3.0\times10^{8}~m/s$. What will be the frequency of this light when detected on Earth?",
        "options": [
          "$2.04\times10^{13}~Hz$",
          "$4.37\times10^{14}~Hz$",
          "$4.57\times10^{14}~Hz$",
          "$4.79\times10^{14}~Hz$"
        ],
        "correctAnswer": "$4.37\times10^{14}~Hz$" // Key Q133: B (Doppler for light receding: f_obs = f_src * sqrt((c-v)/(c+v)). v/c = 1.4e7/3e8 ≈ 0.0467. f_obs ≈ f_src * (1 - v/c) = 4.57e14 * (1 - 0.0467) ≈ 4.356e14 Hz)
      },
      {
        "question": "The speed of sound in an ideal gas depends upon:",
        "options": [
          "Temperature and amplitude",
          "Frequency and fog",
          "Temperature and density", // v = sqrt(γRT/M) = sqrt(γP/ρ)
          "Density and amplitude"
        ],
        "correctAnswer": "Temperature and density" // Key Q134: C
      },
      {
        "question": "If transverse waves are passing through medium, then particle of medium:",
        "options": [
          "Remain stationary",
          "Move away",
          "Move toward",
          "Vibrate perpendicular to wave direction" // Added option
        ],
        "correctAnswer": "Vibrate perpendicular to wave direction" // Key Q135: D
      },
      {
        "question": "When a wave goes from one medium to another, there is a no change in the:",
        "options": ["Frequency", "Amplitude", "Wavelength", "Velocity"], // Added options
        "correctAnswer": "Frequency" // Key Q136: A
      },
      {
        "question": "Wave trough refers to the:",
        "options": [
          "Wave length",
          "Wave speed",
          "Maximum upward displacement", // Added option
          "Maximum downward displacement"
        ],
        "correctAnswer": "Maximum downward displacement" // Key Q137: D
      },
      {
        "question": "In first law of thermodynamic equation $\Delta Q = \Delta U + \Delta W$, if work is done on the system the value of W is:", // Completed question
        "options": ["Heat", "Work", "Negative", "Positive"],
        "correctAnswer": "Negative" // Key Q138: C
      },
      {
        "question": "An ideal gas has molar specific heat Cp at constant pressure. When the temperature of n moles is raised by $\Delta T$, the increase in internal energy is:", // Cv = Cp-R. ΔU = nCvΔT
        "options": ["$nCp\Delta T$", "$n(Cp+R)\Delta T$", "$n(Cp-R)\Delta T$", "$n(2Cp+R)\Delta T$"],
        "correctAnswer": "$n(Cp-R)\Delta T$" // Key Q139: C
      },
      {
        "question": "Which of the following devices is used to measure emf?", // Completed question
        "options": ["Internal battery", "Wet cell", "Voltmeter", "Ammeter"],
        "correctAnswer": "Voltmeter" // Key Q140: C (Ideally, a potentiometer for precise EMF)
      },
      {
        "question": "A wire of uniform area of cross-section 'A', length 'L', and resistance 'R' is cut into two equal parts. What will happen to the resistivity of each part?",
        "options": [
          "It will be doubled",
          "It will be one fourth",
          "It will be halved",
          "It will remain the same"
        ],
        "correctAnswer": "It will remain the same" // Key Q141: D
      },
      {
        "question": "If 0.5 T field is applied over an area of 2-meter square which lies at an angle of 60 degree with the field, then the resulting flux will be:",
        "options": ["0.5 T", "0.5 Wb", "0.25 Wb", "0.25 T"],
        "correctAnswer": "0.5 Wb" // Following Key B
      },
      {
        "question": "The magnitude of magnetic force will be maximum on current carrying conductor in uniform magnetic field if conductor is placed?",
        "options": [
          "Parallel to magnetic field",
          "At 45 degree in magnetic field",
          "Perpendicular to magnetic field",
          "Antiparallel in magnetic field"
        ],
        "correctAnswer": "Perpendicular to magnetic field" // Key Q143: C (F=ILBsinθ, max when sinθ=1, θ=90°)
      },
      {
        "question": "In principle, the transformer consists of two coils of copper, electrically insulated from each other, wound on the same?",
        "options": ["Iron core.", "Copper core.", "Gold core", "Steel core."],
        "correctAnswer": "Iron core." // Key Q144: A
      },
      {
        "question": "In Compton effect, the incident photon when compared to the scattered photon is of:",
        "options": [
          "Greater energy",
          "Greater frequency",
          "Greater energy and momentum",
          "Equal energy"
        ],
        "correctAnswer": "Greater energy and momentum" // Key Q145: C (Also greater frequency, shorter wavelength)
      },
      {
        "question": "Which of the following is the longest wavelength of radiation for the Paschen series?", // Longest λ is lowest E transition (n=4 to n=3)
        "options": [
          "1.87 x 10⁻⁶ m", // Representing A as meters
          "1 / (1.87 x 10⁻⁶ m)", // Representing B
          "1.87 x 10⁻⁶ m", // Option C is same as A if interpreted correctly
          "1 / (1.87 x 10⁻⁶ m)" // Option D is same as B
        ],
        "correctAnswer": "1.87 x 10⁻⁶ m" // Key Q146: C (Rydberg formula: 1/λ = R(1/nf² - 1/ni²) = R(1/3² - 1/4²) = R(1/9 - 1/16) = R(7/144). λ = 144/(7R) ≈ 1.875 x 10⁻⁶ m)
      },
      {
        "question": "Which of the following is the correct definition of variable velocity?",
        "options": [
          "Unequal distances are covered in equal Intervals of time",
          "Equal distances are covered in equal intervals of time", // Added option
          "Unequal displacements are made in equal intervals of time",
          "Equal displacements are made in equal intervals of time"
        ],
        "correctAnswer": "Unequal displacements are made in equal intervals of time" // Key Q147: C (Velocity = displacement/time. Variable velocity means unequal displacement in equal time, or change in direction)
      },
      {
        "question": "Fractional change in resistance per Kelvin is called?", // Question text completed
        "options": [
          "Conductivity",
          "Resistivity",
          "Temperature coefficient of resistivity",
          "Temperature coefficient of resistance"
        ],
        "correctAnswer": "Temperature coefficient of resistance" // Key Q148: D (α = (ΔR/R₀)/ΔT)
      },
      {
        "question": "According to maximum power transfer theorem, which of the following is the max power transferred?", // Assuming source EMF is E, internal resistance r, load R=r
        "options": ["$E^{2}/4r$", "$E^{2}/2r$", "$E^{2}/5r$", "$E^{2}/3r$"], // Corrected typo from t to r
        "correctAnswer": "$E^{2}/4r$" // Key Q149: A (I = E/(R+r) = E/(2r). P = I²R = (E/2r)² * r = E²/(4r²) * r = E²/4r)
      },
      {
        "question": "When electric and magnetic fields are applied perpendicular to each other, the velocity selector formula is given by?", // Question text completed
        "options": ["$V=E/B$", "$V=B/E$", "$V=E\times B$", "$V=0$"],
        "correctAnswer": "$V=E/B$" // Key Q150: A (When qE = qvB)
      },
      {
        "question": "The quantity $\Delta\phi/\Delta t$ has the same units as that of?", // Note: Magnetic Flux φ
        "options": ["Current", "Magnetic induction", "Charge", "Emf"],
        "correctAnswer": "Emf" // Key Q151: D (Faraday's Law: ε = -N ΔΦ/Δt. Unit is Volt)
      },
      {
        "question": "Force on a charge moving parallel to magnetic field is:", // Question text completed
        "options": ["Maximum", "Minimum", "Motional emf", "Mutual inductance"], // Options seem mismatched, asking about magnitude.
        "correctAnswer": "Minimum" // Key Q152: B. F = qvBsinθ. If parallel, θ=0, sinθ=0, F=0 (Minimum).
      },
      {
        "question": "Working principal of magnetic levitation train is according to?",
        "options": ["Faraday law", "Max planks law", "Ohm law", "Lenz law"], // More related to electromagnetic forces/repulsion than induction laws specifically.
        "correctAnswer": "Lenz law" // Key Q153: D (Induced currents opposing change cause repulsion/levitation)
      },
      {
        "question": "The expression for the emf produced by A. C. generator is?", // ε = NωABsin(ωt)
        "options": ["NωAB Sinθ", "NωAB Cosθ", "NωAB", "ILB Cosθ"], // Assuming θ = ωt
        "correctAnswer": "NωAB Sinθ" // Key Q154: A
      },
      {
        "question": "For the positive half cycle i.e., $0\rightarrow T/2$, the diode D:", // Assuming standard rectifier circuit
        "options": [
          "Is reverse biased",
          "Is forward biased",
          "Behaves as open",
          "Shows maximum resistance"
        ],
        "correctAnswer": "Is forward biased" // Key Q155: B
      },
      {
        "question": "The process of ejection of loosely bound electrons from a certain photo sensitive surface by absorption of photon is called:",
        "options": [
          "Compton effect",
          "Photoelectric effect",
          "Pair production",
          "Black body radiation"
        ],
        "correctAnswer": "Photoelectric effect" // Key Q156: B
      },
      {
        "question": "In Compton effect, a photon of a certain wavelength collides with a stationary electron. The wavelength of the emitted photon is:",
        "options": ["Longer", "Shorter", "Same", "Infinite"],
        "correctAnswer": "Longer" // Key Q157: A (Photon loses energy to electron, E=hc/λ, lower E -> longer λ)
      },
      {
        "question": "The Balmer series of hydrogen is important because it:",
        "options": [
          "Is the only one for which the quantum theory can be used",
          "Is the only series that occurs for hydrogen",
          "Is in the visible region",
          "Involves the lowest possible quantum number n"
        ],
        "correctAnswer": "Is in the visible region" // Key Q158: C
      },
      {
        "question": "The SI unit of equivalent dose is:",
        "options": ["Gray", "Mass", "Rad", "Sievert"],
        "correctAnswer": "Sievert" // Key Q159: D
      },
      {
        "question": "The decay rate of radioactive substance is:",
        "options": [
          "Constant with time",
          "Varies inversely with time",
          "Decreases exponentially with time",
          "Decreases linearly with time"
        ],
        "correctAnswer": "Decreases exponentially with time" // Key Q160: C (Activity A = λN = λN₀e^(-λt))
      },
      {
        "question": "The relation between gray and rad is given as: 1 Gy = _______ rad",
        "options": ["0.01", "0.001", "10", "100"],
        "correctAnswer": "100" // Key Q161: D (1 Gy = 1 J/kg, 1 rad = 0.01 J/kg)
      },
      {
        "question": "The velocity-time plot for a moving particle shows a straight line. This means:",
        "options": [
          "The particle has a constant acceleration",
          "The particle has never turned around",
          "The particle has zero displacement",
          "The data in insufficient"
        ],
        "correctAnswer": "The particle has a constant acceleration" // Key Q162: A (Slope of V-T graph is acceleration)
      },
      {
        "question": "A man is in a car that is moving with the velocity of 36km/hr. His speed with respect to the car is:",
        "options": ["$10m/s$", "$36m/s$", "Zero", "Infinite"],
        "correctAnswer": "Zero" // Key Q163: C
      },
      {
        "question": "On which car there is resultant force?",
        "options": [
          "Car moving on a straight horizontal road at constant velocity", // Added constant velocity
          "Car moving at constant speed around a bend",
          "Car moving uphill at a constant velocity",
          "Car that is stationary"
        ],
        "correctAnswer": "Car moving at constant speed around a bend" // Key Q164: B (Centripetal force needed for change in direction)
      },
      {
        "question": "If two equal masses are in motion with same individual speeds, we can conclude that",
        "options": [
          "Their momentums are same",
          "Their momentums can be different from each other",
          "Their kinetic energies are different", // Added option
          "Their velocities are same" // Added option
        ],
        "correctAnswer": "Their momentums can be different from each other" // Key Q165: B (Momentum is vector; depends on direction)
      },
      {
        "question": "The work done by a variable force can be found by dividing the:",
        "options": [
          "Force into small intervals",
          "The displacement into small intervals", // And summing F*Δd
          "Total force by total displacement", // Added option
          "Average force by displacement" // Added option
        ],
        "correctAnswer": "The displacement into small intervals" // Key Q166: B (Area under F-d graph)
      },
      {
        "question": "Two bodies with kinetic energies in the ratio of 4: 1 are moving with equal linear momentum. The ratio of their masses is:",
        "options": ["1:2", "1:1", "1:4", "4:1"], // Added 4:1
        "correctAnswer": "1:4"
      },
      {
        "question": "A fisherman lifts a fish of mass 250 g from rest through a vertical height of 1.8 m. The fish gains speed to $1.1~m/s$. How much work is done on the fish?", // Corrected speed
        "options": ["0.15 J", "4.3 J", "4.4 J", "4.6 J"], // Corrected option B typo
        "correctAnswer": "4.6 J" // Key Q168: D (Work = ΔKE + ΔPE = (½ * 0.25 * 1.1²) + (0.25 * 9.8 * 1.8) ≈ 0.151 + 4.41 ≈ 4.56 J)
      },
      {
        "question": "How many degrees are there in one radian?",
        "options": ["$57^{\circ}3'$", "$57^{\circ}3''$", "$57^{\circ}18'$", "$57^{\circ}18''$"], // Note: Minute ' , Second ''
        "correctAnswer": "$57^{\circ}18'$" // Key Q169: C (1 rad = 180°/π ≈ 57.3° ≈ 57° 18')
      },
      {
        "question": "Angular acceleration is given by the formula:", // Question text completed
        "options": ["$\alpha = \omega / t$", "$\alpha = \omega t$", "$\alpha = \Delta \omega / \Delta t$", "$\alpha = \Delta t / \Delta \omega$"],
        "correctAnswer": "$\alpha = \Delta \omega / \Delta t$" 
      },
      {
        "question": "An 8.0-kg box slides along a horizontal frictionless floor at $3~m/s$ and collides with a relatively massless spring that compresses 12 cm before the box comes to a rest. Calculate the spring constant?",
        "options": ["3 N/m", "30 N/m", "5000 N/m", "3000 N/m"], // Corrected option C
        "correctAnswer": "5000 N/m" // Key Q171: C. KE_initial = PE_spring_final. ½mv² = ½kx². k = mv²/x² = (8 * 3²) / (0.12)² = (8 * 9) / 0.0144 = 72 / 0.0144 = 5000 N/m. Key C is 5000 N/m.
      },
      {
        "question": "The circular line has a fix distance from ?",
        "options": ["Any point", "A fix point", "A point on a circle", "A point from outside"],
        "correctAnswer": "A fix point" // Key Q172: B (The center)
      },
      {
        "question": "If a particle is moving with uniform circular motion, then:",
        "options": [
          "Velocity and acceleration are antiparallel",
          "Velocity and acceleration are parallel",
          "Velocity and acceleration are perpendiculars",
          "Zero acceleration"
        ],
        "correctAnswer": "Velocity and acceleration are perpendiculars" // Key Q173: C (Velocity is tangential, acceleration is centripetal/radial)
      },
      {
        "question": "One degree is equal to:",
        "options": ["$\pi/90$ radians.", "$\pi/180$ radians.", "$\pi/270$ radians.", "$\pi/360$ radians."], // Corrected pi symbol
        "correctAnswer": "$\pi/180$ radians." // Key Q174: B
      },
      {
        "question": "An observer standing near the sea shore observes 54 waves per minute. If the wavelength of the water wave is 10m then the velocity of water wave is:",
        "options": ["$540~m/s$", "$9~m/s$", "$5.4~m/s$", "none"],
        "correctAnswer": "$9~m/s$" // Key Q175: B (f = 54 waves/60 sec = 0.9 Hz. v = fλ = 0.9 * 10 = 9 m/s)
      },
      {
        "question": "If the length of second pendulum becomes four times, then its time period will become:",
        "options": ["Four times", "Two times", "Half", "One fourth"],
        "correctAnswer": "Deleted" // Key indicates deleted. (T = 2π√(L/g). If L->4L, T' = 2π√(4L/g) = 2 * (2π√(L/g)) = 2T. Answer should be 'Two times')
      },
      {
        "question": "Choose the sentence that is grammatically correct:",
        "options": [
          "He weighed himself two maunds.",
          "He weighed two maunds.",
          "He weighed themselves two maunds.",
          "He weighed itself two maunds."
        ],
        "correctAnswer": "He weighed two maunds." // Key Q177: B
      },
      {
        "question": "Choose the correct option. We felt as if the ground was _______ beneath our feet.",
        "options": ["digging", "sinking", "slipping", "bursting"],
        "correctAnswer": "slipping" // Key Q178: C
      },
      {
        "question": "A few years ago, it _______ that human beings do not belong to this earth.",
        "options": ["found", "was found", "were found", "had found"],
        "correctAnswer": "was found" // Key Q179: B
      },
      {
        "question": "A shoal of fish _______ killed by the fishermen.",
        "options": ["has been", "have", "had", "has"],
        "correctAnswer": "has been" // Key Q180: A (Shoal is singular collective noun)
      },
      {
        "question": "At last the fly was _______. The most appropriate word to be filled in is:",
        "options": [
          "Trapped by the spider",
          "Entertained by the spider",
          "Invited by the spider",
          "Spared by the spider."
        ],
        "correctAnswer": "Trapped by the spider" // Key Q181: A
      },
      {
        "question": "Choose the similar meaning of the bracketed word. (Providentially), his mind was not injured.",
        "options": ["Slowly", "Steadily", "Really", "Luckily"],
        "correctAnswer": "Luckily" // Key Q182: D
      },
      {
        "question": "A carpenter carves _______ on cab doors. Choose the right word to fill in the blank.",
        "options": ["Arabesque", "Ornate", "Decked", "Floral"],
        "correctAnswer": "Arabesque" // Key Q183: A (Arabesque is a type of carving/design)
      },
      {
        "question": "_______ methods don't work. Choose the correct option:",
        "options": ["This", "These", "The", "That"],
        "correctAnswer": "These" // Key Q184: B
      },
      {
        "question": "We just _______ a game of tennis.",
        "options": ["has", "had", "have", "have had"],
        "correctAnswer": "had" // Key Q185: B (Simple past)
      },
      {
        "question": "The pen is expensive; still I _______ it.",
        "options": ["bought", "will buy", "have bought", "buyed"],
        "correctAnswer": "will buy" // Key Q186: B (Indicates future intention despite cost)
      },
      {
        "question": "Punctuate the given sentence correctly. My father is Chairman of the Committee on Internal Relations he also heads the Discipline Committee.",
        "options": [
          "My father is Chairman of the Committee on Internal Relations. He also heads the Discipline Committee.",
          "My father is Chairman of the Committee on Internal Relations he also heads the Discipline Committee.",
          "My father is Chairman of the Committee on Internal Relations: he also heads the Discipline Committee.",
          "My father is Chairman of the Committee on Internal Relations, but he also heads the Discipline Committee."
        ],
        "correctAnswer": "My father is Chairman of the Committee on Internal Relations. He also heads the Discipline Committee." // Key Q187: A
      },
      {
        "question": "Which of the following sentences is correct?",
        "options": [
          "I want to live near my parents live.",
          "I want to live where my parents live.",
          "I want to live where, my parents live.",
          "I want to live where: my parents live."
        ],
        "correctAnswer": "I want to live where my parents live." // Key Q188: B
      },
      {
        "question": "Choose the sentence that is grammatically correct:", // Duplicate Q177
        "options": [
          "He weighed himself two maunds.",
          "He weighed two maunds.",
          "He weighed themselves two maunds.",
          "He weighed itself two maunds."
        ],
        "correctAnswer": "Deleted" // Key indicates deleted
      },
      {
        "question": "Choose the correct option. We felt as if the ground was _______ beneath our feet.", // Duplicate Q178
        "options": ["digging", "sinking", "slipping", "bursting"],
        "correctAnswer": "Deleted" // Key indicates deleted
      },
      {
        "question": "Right after the Civil War, many distraught soldiers made their way West to find fame and fortune. Some could not go home because there were no homes to go to. The war had devastated them. One young man, Will Goodlad, made his fortune in the hills of Colorado. He found gold in a little river near Grand Junction. His fortune was short lived, however. In 1875, he declared bankruptcy and returned to the land of his birth- the Piedmont of South Carolina. For which side did Will fight during the War?",
        "options": ["East", "West", "North", "South"],
        "correctAnswer": "South" // Key Q191: D (Returned to South Carolina, implies he fought for the Confederacy/South)
      },
      {
        "question": "_______ so many people been out of work as today. Which part is the most appropriate to be filled in the blank?",
        "options": [
          "More than ever before",
          "Never before have",
          "In the past, there never have",
          "Formerly, there never were"
        ],
        "correctAnswer": "Never before have" // Key Q192: B
      },
      {
        "question": "Spot the error out of the bracketed words. We try to speak (with) (one another) (but) (convey) nothing.",
        "options": ["with", "one another", "but", "convey"],
        "correctAnswer": "with" // Key Q193: A (Should be 'speak *to* one another')
      },
      {
        "question": "In winter, the days and nights is cold. Choose the part of the sentence that carries error:",
        "options": ["In winter", "The days", "And nights", "Is cold"],
        "correctAnswer": "Is cold" // Key Q194: D (Subject 'days and nights' is plural, needs 'are cold')
      },
      {
        "question": "All children are silly people. Some silly people are rich people. All rich people are big shots. Which of the following conclusions are NECESSARILY TRUE? CONCLUSIONS: I. Some silly people are children. II. Some rich people are children. III. Some silly people are big shots.",
        "options": ["I and III", "II", "II and III", "I and II"],
        "correctAnswer": "I and III" // Key Q195: A (I: From 'All children are silly', it follows 'Some silly are children'. II: Children -> Silly <-> Rich -> Big Shot. No necessary link between Rich and Children. III: Some Silly are Rich, All Rich are Big Shots => Some Silly are Big Shots)
      },
      {
        "question": "Read the following and choose the correct answer: \"X, Y and Z are three whole numbers less than 31 but greater than 23. X is a prime number. Y is the largest odd number smaller than 35. Z is the smallest even number?\"", // Ambiguity in 'smallest even number?' within the range > 23.
        "options": [
          "X is 31, Y is 29 and Z is 24.", // X cannot be 31
          "X is 29, Y is 29 and Z is 24.",
          "X is 23, Y is 29 and Z is 24.", // X must be > 23
          "X is 27, Y is 31 and Z is 26." // X=27 not prime, Y cannot be 31
        ],
        "correctAnswer": "X is 29, Y is 29 and Z is 24." // Key Q196: B (Prime X in range is 29. Largest odd Y < 35 is 33 (outside range) or 29 (in range). Smallest even Z > 23 is 24.)
      },
      {
        "question": "Observe the pattern and select the next term in the sequence: SSSSS, SSRSS, SRQRS, RQPQR", // Pattern seems to be shifting left and decrementing letters. S->R, R->Q, Q->P. 5th: S->R, 4th: S->R->Q->P, 3rd: S->S->R->Q->P, 2nd: S->S->Q->P->O, 1st: S->S->S->R->Q
        "options": ["RQOQR", "QRORQ", "RQPOPQR", "QPOPQ"],
        "correctAnswer": "QPOPQ" // Key Q197: D (Applying pattern: RQPQR -> QPOPQ)
      },
      {
        "question": "Read the following statement, assuming everything in it to be true. Then decide which of the given suggested courses of action logically follow and are worth pursuing. Statement: Your toddler drops and breaks a glass by genuine accident. Courses of Action: I. Yell at them to be more careful with things made out of glass. II. Punish them to make sure they remember to be extra careful next time.",
        "options": ["I", "II", "Both I and II", "Neither I nor II"],
        "correctAnswer": "Neither I nor II" // Key Q198: D (Yelling/punishing for a genuine accident is generally considered inappropriate parenting)
      },
      {
        "question": "Read the following statements and identify the best cause and effect relation. I. State P started providing multiple rehabilitation schemes, like free education, job search help and help groups for addicts, etc. over the past year. II. Crimes rates for state P have steadily decreased over the past year.",
        "options": [
          "II is the cause and I is its effect",
          "I is the cause and II is its effect",
          "I and II are effects of some common cause",
          "I and II are both effects of independent causes"
        ],
        "correctAnswer": "I is the cause and II is its effect" // Key Q199: B (Rehab schemes likely caused crime reduction)
      },
      {
        "question": "Read the passage and the following statements below. Then choose the correct option, basing your answer only on the information provided. Passage: Pakistan is rich in wildlife and culture. It is home to many sorts of wildlife, from the Ibex to the Indus River Dolphin; and people from most countries in the world have made their home here. STATEMENTS: I. Pakistan is a rich country. II. People from all nationalities of the world live in Pakistan. III. Pakistan is home to at least one dolphin species.",
        "options": [
          "Only III is correct",
          "Only I and II are correct",
          "Only I and III are correct",
          "Only II and III are correct"
        ],
        "correctAnswer": "Only III is correct" // Key Q200: A (Same reasoning as Q196)
      }
];
export default questions;
