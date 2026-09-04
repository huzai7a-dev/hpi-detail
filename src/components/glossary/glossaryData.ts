export type GlossaryTerm = { term: string; body: string };
export type GlossaryCategory = { title: string; terms: GlossaryTerm[] };

export const glossaryCategories: GlossaryCategory[] = [
  {
    title: "HPI Check® terms explained",
    terms: [
      {
        term: "Condition Alert",
        body: "This register warns that a vehicle has been subject to an insurance total loss claim, or 'written-off', because of damage or because it has been stolen and not recovered. For vehicles written-off since January 1997, the HPI Check provides an insurer damage classification, A to D. Categories N and S were added in October 2017 and better describe the type of damage to the vehicle rather than the cost of repair.",
      },
      {
        term: "Condition Inspected",
        body: "This register was introduced in 1990 and gives details of 'written off' vehicles that have subsequently passed an independent structural examination, carried out in accordance with a specification agreed with the Motor Insurance Repair Research Centre (Autolign).",
      },
      {
        term: "Document Check",
        body: "Stolen V5C registration documents are in circulation. Any vehicle with a stolen V5C is likely to be stolen. Provide the V5C registration document serial number and issue date and the HPI Check can confirm whether it has been recorded as stolen.",
      },
      {
        term: "Export History",
        body: "If a vehicle is exported out of the UK and then subsequently imported back in, the record of the export is removed from the vehicle's history by the DVLA. HPI is unable to provide any information about the vehicle's history whilst it was registered and used abroad.",
      },
      {
        term: "Import History",
        body: "The DVLA no longer classifies the import status of any vehicle originating outside the UK, so your HPI Check will not provide information on the import history of the vehicle you are checking. We will tell you if, according to the DVLA, the vehicle has been previously used outside of the UK.",
      },
      {
        term: "Insurance Theft",
        body: "Each year around 150,000 vehicle thefts are recorded by insurers. The HPI Check will tell you whether a vehicle you are looking to buy has any outstanding insurance interest recorded against it.",
      },
      {
        term: "Mileage Check",
        body: "'Clocking', or turning back the mileage reading on a vehicle, is a major problem in the UK. HPI operates the National Mileage Register® (NMR), containing over 200 million recorded mileages, and cross-references all mileages previously recorded against the vehicle.",
      },
      {
        term: "Outstanding Finance",
        body: "Nearly two thirds of new vehicles sold every year are purchased using some form of finance agreement. With over 7 million current finance agreements registered with HPI, we check the car you are buying is not subject to one of them.",
      },
      {
        term: "Plate Transfer",
        body: "This register indicates whether a vehicle has had a legitimate registration plate change since April 1990. The HPI Check includes an enquiry check against all prior plates to identify other interests that may still be associated with the vehicle.",
      },
      {
        term: "Police Stolen",
        body: "The HPI Check provides information from the Police National Computer on vehicles that are recorded as currently stolen. Never buy a vehicle on this register, because you stand to lose it, together with the money you paid for it.",
      },
      {
        term: "Security Watch",
        body: "This register typically records vehicles at high risk of fraud or theft (e.g. hire cars, demonstrator vehicles and garage forecourt stock), used primarily by the Police, finance companies and the motor trade.",
      },
      {
        term: "Valuation",
        body: "This helps you determine the market value of the vehicle you want to buy, based on the vehicle being in average condition for its age, bought from a dealer, at the mileage supplied by you.",
      },
      {
        term: "Vehicle Ownership",
        body: "There are many circumstances where the 'owner' of a vehicle is not the 'keeper' recorded on the DVLA V5C document - for example, outstanding finance, a stolen record, or the security watch register.",
      },
      {
        term: "Vehicle Identity Check (VIC)",
        body: "The VIC programme was closed down in October 2015. Vehicles written off within categories A, B or C will have a 'VIC marker' put against them by the DVLA, designed to help stop stolen cars being passed off as repaired accident-damaged cars.",
      },
      {
        term: "VIN Match",
        body: "This confirms the unique Vehicle Identification Number (VIN), usually 17 digits, given to each vehicle during manufacture. All the VINs on the vehicle should match the one on the V5C registration document.",
      },
    ],
  },
  {
    title: "Used car terms explained",
    terms: [
      {
        term: "Caveat Emptor",
        body: "Latin for 'buyer beware', meaning the onus is on you (the buyer) to ensure that you know what you are purchasing. Legal protection in the used car market is limited, especially with private sellers.",
      },
      {
        term: "Clocked",
        body: "Clocking involves reducing the mileage of a vehicle by turning back or replacing the odometer, with the intention of increasing the value and deceiving subsequent purchasers. HPI research shows 1 in 14 vehicles have some sort of mileage discrepancy.",
      },
      {
        term: "Cut 'n' Shut",
        body: "The term used for a car that is made up of two different vehicles - usually both 'write-offs' - where the back end of one is welded to the front of another. The practice is illegal and the car may be unroadworthy.",
      },
      {
        term: "Good Title",
        body: "If a vehicle has good title, it means the owner has the right to sell it, and that the vehicle is not subject to any third party ownership rights, e.g. hire purchase finance.",
      },
      {
        term: "Exports",
        body: "If a vehicle is exported out of the UK and then subsequently imported back in, the record of the export is removed from the vehicle's history by the DVLA.",
      },
      {
        term: "Imports",
        body: "The DVLA no longer classifies the import status of any vehicle originating outside the UK. We will tell you if the vehicle has been previously used outside of the UK, along with the original date of manufacture and date of UK registration.",
      },
      {
        term: "MOT",
        body: "All the MOT tells you is that a vehicle was in a fit condition to pass a test when presented for inspection on a particular day. It is no substitute for an independent inspection.",
      },
      {
        term: "Q Plate",
        body: "A vehicle registration mark that starts with a 'Q', indicating that the vehicle was either not originally registered in the UK and proof of age was unavailable at registration, or that it was built using a significant proportion of used parts.",
      },
      {
        term: "Ringer",
        body: "Ringing is the practice of using a registration mark taken from a 'donor' vehicle - typically one that's been written off - to change a vehicle's true identity and disguise the fact that it's been stolen.",
      },
      {
        term: "Sale of Goods Act",
        body: "The Sale of Goods Act (1979) obliges car dealers to sell cars of 'satisfactory quality' to which they have good title.",
      },
      {
        term: "Vehicle Inspections by Autolign",
        body: "Autolign Inspections are the only UK based company that specialises in the reclassification of vehicles that have been written off by insurance companies.",
      },
      {
        term: "Total Loss",
        body: "Insurers will describe a vehicle as a total loss if they think that it is beyond repair, or not worth repairing, financially.",
      },
      {
        term: "V5 Registration Document",
        body: "The V5 registration document is issued by the DVLA. It gives the name and address of a vehicle's current keeper as well as the last two registered keepers, plus the car's colour, make, model, engine number and VIN.",
      },
      {
        term: "VIN",
        body: "The Vehicle Identification Number is the manufacturer's own ID, found stamped onto a plate under the bonnet, under the carpet by the driver's seat and/or etched onto the windows.",
      },
      {
        term: "VRM",
        body: "Vehicle Registration Mark, or number plate.",
      },
      {
        term: "Write-off",
        body: "A term for a vehicle that has been subject to an insurance total loss claim, because of damage or because it has been stolen and not recovered. Although write-offs can legitimately be allowed back on the road, almost half are beyond repair.",
      },
    ],
  },
  {
    title: "Vehicle Performance Data explained",
    terms: [
      { term: "Aspiration", body: "The method for getting air into the engine (i.e. normal, turbo charged, super charged etc)." },
      { term: "Bore", body: "The diameter of the cylinders." },
      { term: "CO² Emissions", body: "The number of grams of CO² the vehicle emits per kilometer." },
      { term: "CO² Rating", body: "The car's road tax band, which is dependent on its CO² emissions." },
      { term: "Colour", body: "The dominant colour of the vehicle." },
      { term: "Combined MPG", body: "The average of the Urban and Extra-Urban figures, as defined by the manufacturer." },
      { term: "Date of First Registration in the UK", body: "The date the vehicle was first registered by the DVLA in the UK." },
      { term: "Drive Type", body: "Whether the vehicle is front, rear, or all/4 wheel drive." },
      { term: "Driving Axle", body: "The axle that the power is delivered to (front axle, rear axle, or both)." },
      { term: "Engine Make", body: "The manufacturer of the engine." },
      { term: "Engine Size cc", body: "The stated engine cubic capacity in cubic centimetres e.g. 1998." },
      { term: "Extra Urban MPG", body: "The miles per gallon achieved on non-urban routes, as tested by the manufacturer using a warmed engine." },
      { term: "Fuel", body: "The type of fuel used to power the vehicle (petrol, diesel, electric, LPG etc)." },
      { term: "Height", body: "The distance from a horizontal line touching the highest point of the vehicle roof to the point of contact with the road surface." },
      { term: "Length", body: "The distance between a vertical line at the front bumper of the vehicle to a similar line at the most extreme point at the rear." },
      { term: "Marque", body: "The 'badge' on the vehicle e.g. 'Ford', 'Vauxhall', etc." },
      { term: "Max MPH", body: "The maximum speed the vehicle is capable of." },
      { term: "Number of Cylinders", body: "The number of cylinders in the engine." },
      { term: "Number of Doors", body: "The number of doors on the vehicle." },
      { term: "Number of Gears", body: "The number of gears the vehicle has, excluding reverse." },
      { term: "Number of Seats", body: "The number of standard seats in the vehicle." },
      { term: "Power BHP", body: "The maximum declared power of the engine in Brake Horse Power (BHP)." },
      { term: "Power Delivery", body: "Method of delivering fuel into the engine (i.e. fuel injection)." },
      { term: "Power RPM", body: "The number of revolutions per minute at which the maximum power occurs." },
      { term: "Range", body: "The collective name for a family of model variants e.g. 'MONDEO', 'FOCUS', 'ASTRA'." },
      { term: "Stroke", body: "The distance travelled by the piston along the length of the cylinder." },
      { term: "Torque Lb-ft", body: "Torque is the rotational equivalent to force measured in pound-feet - essentially the engine's 'pulling' power." },
      { term: "Torque RPM", body: "The engine speed when maximum torque is produced." },
      { term: "Transmission", body: "The type of transmission the vehicle has (manual, automatic, semi-automatic etc)." },
      { term: "Urban MPG", body: "The miles per gallon achieved on urban routes, as tested by the manufacturer from a cold start." },
      { term: "Width", body: "The distance between two vertical lines touching the opposite sides of the vehicle, excluding the wing mirrors." },
      { term: "Year of manufacture", body: "The year the vehicle was assembled." },
      { term: "0-60mph", body: "Time taken to reach 60 mph from a standing start." },
    ],
  },
];
