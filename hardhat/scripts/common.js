exports.ABI = [
    // IErc20 Interface
    'function name() external pure returns (string memory)',
    'function symbol() external pure returns (string memory)',
    'function decimals() external pure returns (uint8)',
    'function balanceOf(address _address) external view returns (uint256)',
    'function transfer(address to, uint256 value) external returns (bool)',
    'function approve(address spender, uint256 value) external returns (bool)',
    'function transferFrom(address from, address to, uint256 value) external returns (bool)',
    'function allowance(address owner, address spender) external view returns (uint256)',

    // IWeth Interface, extends IErc20
    'function deposit() external payable',
    'function withdraw(uint256 amount) external',
    'function sum(uint256[] memory values) external pure returns (string memory, uint256)',
    'function sumWithHelper(address helper, uint256[] memory values) external view returns (uint256)'
];


exports.ADDRESS = '0xa9a04d0C22B6f264BC72a108d124f25BD199c928';
