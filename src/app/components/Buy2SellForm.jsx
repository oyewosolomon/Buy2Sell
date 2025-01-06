import React from 'react';

export default function Buy2SellForm() {
  const plotSizes = ["2700SQM", "1800SQM", "900SQM", "600SQM", "450SQM", "300SQM", "150SQM"];
  const plans = ["Flourish Luxury Villa Epe", "Flourish Luxury Villa Monastery", "Flourish Luxury Villa Ilorin"];
  const durations = ["12months", "18months", "24months"];

  const inputStyles = "mt-1 block w-full outline-none border-b focus:border-blue-500 focus:ring-0 sm:text-sm";

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 sm:px-20">
      <div className="max-w-4xl mx-auto bg-white px-8 pb-8 shadow-md rounded-md">
        <div className='-p-8 -pt-10'>
        <img src="/buytosell header.png" alt="BuyToSell"/>
        </div>
        <form className="space-y-6">
          {/* Section 1: Subscriber Details */}
          <div>
            <h2 className="text-xl font-medium mb-4">Subscriber Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name (Surname Othername)</label>
                <input type="text" id="name" name="name" className={inputStyles} required />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Title</span>
                <div className="mt-1 flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="title" value="Mr" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" required />
                    <span className="ml-2 text-sm">Mr</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="title" value="Mrs" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" required />
                    <span className="ml-2 text-sm">Mrs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="title" value="Miss" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" required />
                    <span className="ml-2 text-sm">Miss</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="spouse-name" className="block text-sm font-medium text-gray-700">Name of Spouse (Surname Othername)</label>
                <input type="text" id="spouse-name" name="spouse-name" className={inputStyles} />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" name="address" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" id="dob" name="dob" className={inputStyles} required />
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Gender</span>
                <div className="mt-1 flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="Male" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" required />
                    <span className="ml-2 text-sm">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="Female" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" required />
                    <span className="ml-2 text-sm">Female</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="marital-status" className="block text-sm font-medium text-gray-700">Marital Status</label>
                <input type="text" id="marital-status" name="marital-status" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                <input type="text" id="nationality" name="nationality" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
                <input type="text" id="occupation" name="occupation" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="employer" className="block text-sm font-medium text-gray-700">Employer's Name</label>
                <input type="text" id="employer" name="employer" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country of Residence</label>
                <input type="text" id="country" name="country" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language Spoken</label>
                <input type="text" id="language" name="language" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone Number</label>
                <input type="tel" id="telephone" name="telephone" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="id-type" className="block text-sm font-medium text-gray-700">Valid ID Type</label>
                <input type="text" id="id-type" name="id-type" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="id-no" className="block text-sm font-medium text-gray-700">ID No</label>
                <input type="text" id="id-no" name="id-no" className={inputStyles} required />
              </div>
            </div>
          </div>

          {/* Section 2: Next of Kin */}
          <div>
            <h2 className="text-xl font-medium mb-4">Next of Kin</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="kin-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="kin-name" name="kin-name" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="kin-address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="kin-address" name="kin-address" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="kin-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="kin-phone" name="kin-phone" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="kin-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="kin-email" name="kin-email" className={inputStyles} required />
              </div>
            </div>
          </div>

          {/* Section 3: Subscriber Declaration */}
          <div>
            <h2 className="text-xl font-medium mb-4">Subscriber Declaration</h2>
            <p className="text-sm text-gray-700 mb-4">
              I <input type="text" id="subscriber-name" name="subscriber-name" className="inline-block w-64 border-0 outline-none border-b bg-transparent focus:border-blue-500 focus:ring-0 sm:text-sm" required /> hereby affirm that all information provided as requirement for purchase of land with PWAN GROUP is correct. PWAN GROUP shall not be held responsible for any inaccurate information provided by the subscriber.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="block text-sm font-medium text-gray-700">Type of Plot</span>
                <div className="mt-1 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" name="plot-type" value="Residential" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <span className="ml-2 text-sm">Residential</span>
                    <input type="text" name="residential-plots" placeholder="Number of Plots" className={`ml-4 w-32 ${inputStyles}`} />
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="plot-type" value="Mall" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <span className="ml-2 text-sm">Mall</span>
                    <input type="text" name="mall-plots" placeholder="Number of Plots" className={`ml-4 w-32 ${inputStyles}`} />
                  </label>
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Plot Size</span>
                <div className="mt-1 grid grid-cols-3 gap-4">
                  {plotSizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" name="plot-size" value={size} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Plans and Scheme</span>
                <div className="mt-1 space-y-2">
                  {plans.map((plan) => (
                    <label key={plan} className="flex items-center">
                      <input type="checkbox" name="plan-scheme" value={plan} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Duration/Rate</span>
                <div className="mt-1 space-y-2">
                  {durations.map((duration) => (
                    <label key={duration} className="flex items-center">
                      <input type="checkbox" name="duration" value={duration} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="subscriber-signature" className="block text-sm font-medium text-gray-700">Signature</label>
                <input type="text" id="subscriber-signature" name="subscriber-signature" className={inputStyles} required />
              </div>
              <div>
                <label htmlFor="subscriber-date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="subscriber-date" name="subscriber-date" className={inputStyles} required />
              </div>
              <div className='w-full'>
                <span className="block text-sm font-medium text-gray-700">Mode of Profit Payment</span>
                <div className="mt-1 space-y-2 w-full justify-between flex">
                    <div className='flex gap-6 w-1/2'>
                        <label className="flex items-center">
                            <input type="checkbox" name="payment-mode" value="Cheque" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="ml-2 text-sm">Cheque</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="payment-mode" value="Direct Transfer" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <span className="ml-2 text-sm">Direct Transfer</span>
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <div className="mt-2">
                            <label htmlFor="client-bank" className="block text-sm font-medium text-gray-700">Client's Bank</label>
                            <input type="text" id="client-bank" name="client-bank" className={inputStyles} />
                        </div>
                        <div>
                            <label htmlFor="account-no" className="block text-sm font-medium text-gray-700">Account No.</label>
                            <input type="text" id="account-no" name="account-no" className={inputStyles} />
                        </div>
                        <div>
                            <label htmlFor="account-name" className="block text-sm font-medium text-gray-700">Account Name</label>
                            <input type="text" id="account-name" name="account-name" className={inputStyles} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}