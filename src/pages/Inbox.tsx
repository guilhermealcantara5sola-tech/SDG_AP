import React, { useState } from 'react';
import { mockMessages } from '../mocks/data';
import { Search, Send, Smile, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const Inbox: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(mockMessages[0]);

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-2xl border border-gray-100 shadow-sm flex overflow-hidden">
      {/* Sidebar - Chat List */}
      <div className="w-80 border-r border-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mensagens</h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Pesquisar conversas..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockMessages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setSelectedChat(msg)}
              className={`w-full p-4 flex gap-3 hover:bg-gray-50 transition-colors border-l-4 ${
                selectedChat.id === msg.id ? 'bg-purple-50/50 border-purple-500' : 'border-transparent'
              }`}
            >
              <img src={msg.avatar} alt={msg.sender} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-gray-800 text-sm truncate">@{msg.sender}</span>
                  <span className="text-[10px] text-gray-400 uppercase">{msg.time}</span>
                </div>
                <p className={`text-xs truncate mt-0.5 ${msg.unread ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                  {msg.lastMessage}
                </p>
              </div>
              {msg.unread && (
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/30">
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={selectedChat.avatar} alt={selectedChat.sender} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold text-gray-800 text-sm">@{selectedChat.sender}</h3>
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-purple-600 transition-colors"><Phone size={20} /></button>
            <button className="hover:text-purple-600 transition-colors"><Video size={20} /></button>
            <button className="hover:text-purple-600 transition-colors"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex justify-center">
            <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">Hoje</span>
          </div>
          
          {/* Mock Received Message */}
          <div className="flex gap-3 max-w-[70%]">
            <img src={selectedChat.avatar} alt="" className="w-8 h-8 rounded-full self-end" />
            <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed">
                Olá! Vi seu último post sobre o setup e achei incrível. Qual é o modelo desse monitor?
              </p>
              <span className="text-[10px] text-gray-400 mt-2 block">14:20</span>
            </div>
          </div>

          {/* Mock Sent Message */}
          <div className="flex flex-row-reverse gap-3 max-w-[70%] ml-auto">
            <div className="bg-purple-600 text-white p-4 rounded-2xl rounded-br-none shadow-md shadow-purple-600/10">
              <p className="text-sm leading-relaxed">
                Opa, tudo bem? Fico feliz que tenha gostado! É um Dell UltraSharp 27" 4K. Recomendo muito para produtividade.
              </p>
              <span className="text-[10px] text-purple-200 mt-2 block text-right">14:25</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
            <button className="text-gray-400 hover:text-purple-600 transition-colors"><Smile size={20} /></button>
            <button className="text-gray-400 hover:text-purple-600 transition-colors"><Paperclip size={20} /></button>
            <input
              type="text"
              placeholder="Escreva sua mensagem..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-700"
            />
            <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
