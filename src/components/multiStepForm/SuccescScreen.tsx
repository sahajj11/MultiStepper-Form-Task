const SuccessScreen = ({ onReset }: { onReset: () => void }) => (
  <div className="text-center space-y-6 animate-in zoom-in duration-500">
    {/* Checkered Flag Icon */}
    <div className="flex justify-center">
      <div className="bg-white/10 p-6 rounded-full border-4 border-[#e10600] shadow-[0_0_20px_rgba(225,6,0,0.4)]">
        <span className="text-5xl">🏁</span>
      </div>
    </div>

    <div className="space-y-2">
      <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">
        Mission Accomplished
      </h2>
      <p className="text-[#e10600] font-bold uppercase tracking-widest text-xs">
        Data Transmitted to Maranello
      </p>
    </div>

    <p className="text-gray-300 text-sm italic max-w-xs mx-auto">
      "Your registration is complete. Our engineers are reviewing your telemetry. Welcome to the Scuderia."
    </p>

    <button
      onClick={onReset}
      className="mt-4 px-8 py-3 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-[#e10600] transition-all uppercase text-[10px] tracking-[0.3em]"
    >
      Restart Simulator
    </button>
  </div>
);

export default SuccessScreen