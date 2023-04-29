class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def acceptable_attachment(attachment, max_size, acceptable_types, required: false)
    if required
      return errors.add(attachment.name, 'must be present') unless attachment.attached?
    else
      return unless attachment.attached?
    end

    errors.add attachment.name, 'is too big' unless attachment.byte_size <= max_size

    unless acceptable_types.include? attachment.content_type
      errors.add attachment.name,
                 "must be #{acceptable_types.join(' or ')}"
    end
  end
end
