"use client";

export default function KundaliForm() {
  return (
    <div className="bg-[#F0EBE1] rounded-[28px] p-7 space-y-6">
      
      {/* Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
          Gender
        </label>
        <select className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date & Time Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
            Date of Birth
            </label>
            <input
            type="date"
            className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
            />
        </div>

        <div>
            <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
            Time of Birth (AM/PM)
            </label>
            <input
            type="time"
            className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
            />
        </div>
      </div>

      {/* Birth Place */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
          Birth Town / City
        </label>
        <input
          type="text"
          placeholder="e.g., Saharanpur, New Delhi"
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+91 7618550475"
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
        />
      </div>

      {/* User Intent */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#1A1A1A]">
          What do you want to know?
        </label>
        <textarea
          rows={4}
          placeholder="Career, marriage, wealth, education..."
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] border border-[#E5DFD5] text-[#1A1A1A] resize-none focus:outline-none focus:ring-2 focus:ring-[#9B7A58]"
        />
      </div>

      {/* Submit */}
      <button className="w-full rounded-full py-5 bg-[#1A1A1A] text-[#FAF6ED] font-semibold text-lg hover:bg-[#3A332C] transition-colors shadow-md">
        Generate Kundali
      </button>

    </div>
  );
}